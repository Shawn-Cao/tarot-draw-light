import { tarotDeck } from './tarot-data.js';
import { saveDraw, buildHistoryEntry } from './history-store.js';
import { loadPrefs, savePrefs } from './prefs-store.js';
import { getAppBasePath, isEmbedMode, initEmbedResize } from './app-base.js';

const isEmbed = isEmbedMode();

const MAJOR_ARCANA_COUNT = 22;

const cardsContainer = document.getElementById('cards-container');
const stagePrompt = document.getElementById('stage-prompt');
const readingsSection = document.getElementById('readings');
const drawAgainBtn = document.getElementById('draw-again');
const drawSettings = document.getElementById('draw-settings');
const menuToggle = document.getElementById('menu-toggle');
const menuBackdrop = document.getElementById('menu-backdrop');
const installPrompt = document.getElementById('install-prompt');
const installModal = document.getElementById('install-modal');
const installClose = document.getElementById('install-close');

let spreadCount = 1;
let deckType = 'major';
let isDrawing = false;

function persistOptions() {
    savePrefs({ spreadCount, deckType });
}

function applyOptionsToUI() {
    const spreadBtn = drawSettings.querySelector(`[data-spread="${spreadCount}"]`);
    const deckBtn = drawSettings.querySelector(`[data-deck="${deckType}"]`);

    if (spreadBtn) {
        updateSpreadButtons(spreadBtn);
    }
    if (deckBtn) {
        updateDeckButtons(deckBtn);
    }
}
let drawnSlots = [];
let iosInstallModule = null;

function getFilteredDeck(type) {
    if (type === 'major') {
        return tarotDeck.slice(0, MAJOR_ARCANA_COUNT);
    }
    return tarotDeck.slice(MAJOR_ARCANA_COUNT);
}

function pickCards(count, type, excludeIds = new Set()) {
    const pool = getFilteredDeck(type).filter((card) => !excludeIds.has(card.id));
    const results = [];

    for (let i = 0; i < count && pool.length > 0; i++) {
        const index = Math.floor(Math.random() * pool.length);
        const card = pool.splice(index, 1)[0];
        results.push({
            card,
            reversed: Math.random() < 0.5
        });
    }

    return results;
}

function getExcludedCardIds() {
    return new Set(
        drawnSlots.filter(Boolean).map((draw) => draw.card.id)
    );
}

function countDrawn() {
    return drawnSlots.filter(Boolean).length;
}

function isSpreadComplete() {
    return drawnSlots.length === spreadCount && drawnSlots.every(Boolean);
}

function initDrawnSlots() {
    drawnSlots = Array(spreadCount).fill(null);
}

function createCardElement(index) {
    const card = document.createElement('div');
    card.className = 'tarot-card interactive';
    card.dataset.index = String(index);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Draw card ${index + 1}`);

    card.innerHTML = `
        <div class="card-face card-back">
            <div class="card-back-pattern">
                <div class="pattern-row">
                    <span class="celestial">☀</span>
                    <span class="celestial">☽</span>
                </div>
                <span class="center-star">✦</span>
                <div class="pattern-row">
                    <span class="celestial">☽</span>
                    <span class="celestial">☀</span>
                </div>
            </div>
        </div>
        <div class="card-face card-front">
            <div class="card-content">
                <div class="card-art">
                    <div class="card-art-inner">
                        <img src="" alt="" hidden>
                        <div class="card-fallback" hidden>
                            <p class="card-fallback-meaning"></p>
                        </div>
                    </div>
                </div>
                <span class="card-name"></span>
            </div>
        </div>
    `;

    card.addEventListener('click', handleCardActivate);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardActivate(e);
        }
    });

    return card;
}

async function restoreDrawnSlotFaces() {
    const cardEls = cardsContainer.querySelectorAll('.tarot-card');

    await Promise.all(
        [...cardEls].map(async (el, index) => {
            const draw = drawnSlots[index];
            if (!draw) {
                return;
            }

            el.classList.remove('interactive');
            const imageLoaded = await preloadImage(draw.card.imageUrl);
            applyCardFace(el, draw, imageLoaded);
        })
    );
}

const STAR_CARD_CENTERS = [
    [50, 12],
    [86.1, 38.3],
    [72.4, 80.7],
    [27.6, 80.7],
    [13.9, 38.3]
];

const STAR_LINE_ORDER = [0, 2, 4, 1, 3, 0];

function createStarLinesSvg() {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'spread-star-lines');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');

    const points = STAR_LINE_ORDER.map((i) => STAR_CARD_CENTERS[i].join(',')).join(' ');
    const polyline = document.createElementNS(ns, 'polyline');
    polyline.setAttribute('points', points);
    svg.appendChild(polyline);

    return svg;
}

function renderCardSlots() {
    cardsContainer.className = `cards-container cards-count-${spreadCount}`;
    cardsContainer.replaceChildren();

    if (spreadCount === 5) {
        cardsContainer.appendChild(createStarLinesSvg());
    }

    for (let i = 0; i < spreadCount; i++) {
        cardsContainer.appendChild(createCardElement(i));
    }

    return restoreDrawnSlotFaces();
}

function setMenuOpen(open) {
    const isOpen = Boolean(open);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close draw options' : 'Draw options');
    drawSettings.classList.toggle('hidden', !isOpen);
    menuBackdrop.classList.toggle('hidden', !isOpen);
    menuBackdrop.setAttribute('aria-hidden', String(!isOpen));
}

function closeMenu() {
    setMenuOpen(false);
}

function updateStagePrompt() {
    if (isSpreadComplete()) {
        stagePrompt.textContent = '';
        return;
    }

    const deckLabel = deckType === 'major' ? 'Major Arcana' : 'Minor Arcana';
    const revealed = countDrawn();

    if (spreadCount === 1) {
        stagePrompt.textContent = `Tap the card to draw from ${deckLabel}`;
    } else if (revealed > 0) {
        stagePrompt.textContent = `Tap a card to draw (${revealed} of ${spreadCount} revealed)`;
    } else {
        stagePrompt.textContent = `Tap each card to draw from ${deckLabel}`;
    }
}

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

function applyCardFace(el, draw, imageAvailable) {
    const content = el.querySelector('.card-content');
    const artInner = el.querySelector('.card-art-inner');
    const img = el.querySelector('img');
    const fallback = el.querySelector('.card-fallback');
    const fallbackMeaning = el.querySelector('.card-fallback-meaning');
    const name = el.querySelector('.card-name');
    const meaning = draw.reversed ? draw.card.meaning_rev : draw.card.meaning_up;

    name.textContent = draw.card.name;
    artInner.classList.toggle('is-reversed', draw.reversed);
    content.classList.toggle('no-image', !imageAvailable);

    if (imageAvailable) {
        img.src = draw.card.imageUrl;
        img.alt = draw.card.imageAlt;
        img.hidden = false;
        fallback.hidden = true;
        img.onerror = () => applyCardFace(el, draw, false);
    } else {
        img.hidden = true;
        img.removeAttribute('src');
        img.alt = draw.card.imageAlt;
        fallbackMeaning.textContent = meaning;
        fallback.hidden = false;
    }

    el.classList.remove('is-shuffling');
    el.classList.add('is-flipped');
    el.setAttribute(
        'aria-label',
        `${draw.card.name}, ${draw.reversed ? 'reversed' : 'upright'}${imageAvailable ? '' : ', image unavailable'}`
    );
}

function renderReadings() {
    readingsSection.replaceChildren();

    let hasAny = false;

    drawnSlots.forEach((draw, index) => {
        if (!draw) {
            return;
        }

        hasAny = true;
        const item = document.createElement('article');
        item.className = 'reading-item';

        const positionLabel = spreadCount > 1 ? `Card ${index + 1}` : 'Your Reading';

        item.innerHTML = `
            <div class="card-header">
                <h2>${positionLabel}: ${draw.card.name}</h2>
                <span class="badge ${draw.reversed ? 'reversed' : 'upright'}">${draw.reversed ? 'Reversed' : 'Upright'}</span>
            </div>
            <p class="reading-meaning">${draw.reversed ? draw.card.meaning_rev : draw.card.meaning_up}</p>
            <details class="full-meanings">
                <summary>View upright &amp; reversed meanings</summary>
                <div class="meaning-block">
                    <h3>Upright</h3>
                    <p>${draw.card.meaning_up}</p>
                </div>
                <div class="meaning-block">
                    <h3>Reversed</h3>
                    <p>${draw.card.meaning_rev}</p>
                </div>
            </details>
        `;

        readingsSection.appendChild(item);
    });

    readingsSection.classList.toggle('hidden', !hasAny);
}

function finishSpread() {
    const orderedDraws = drawnSlots.filter(Boolean);
    saveDraw(buildHistoryEntry(orderedDraws, spreadCount, deckType));
    drawAgainBtn.classList.remove('hidden');
    updateStagePrompt();
}

function resetDraw() {
    isDrawing = false;
    initDrawnSlots();

    renderCardSlots();
    readingsSection.classList.add('hidden');
    readingsSection.replaceChildren();
    drawAgainBtn.classList.add('hidden');
    updateStagePrompt();
}

function updateSpreadButtons(activeBtn) {
    drawSettings.querySelectorAll('[data-spread]').forEach((option) => {
        const isActive = option === activeBtn;
        option.classList.toggle('active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
    });
}

function updateDeckButtons(activeBtn) {
    drawSettings.querySelectorAll('[data-deck]').forEach((option) => {
        const isActive = option === activeBtn;
        option.classList.toggle('active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
    });
}

function expandSpread(newSpread) {
    const next = Array(newSpread).fill(null);

    for (let i = 0; i < drawnSlots.length && i < newSpread; i++) {
        next[i] = drawnSlots[i];
    }

    drawnSlots = next;
    spreadCount = newSpread;
    persistOptions();
    renderCardSlots();
    drawAgainBtn.classList.add('hidden');
    renderReadings();
    updateStagePrompt();
}

async function drawCardAtIndex(index) {
    if (isDrawing || isSpreadComplete() || drawnSlots[index]) {
        return;
    }

    const excludeIds = getExcludedCardIds();
    const [draw] = pickCards(1, deckType, excludeIds);

    if (!draw) {
        stagePrompt.textContent = 'No cards left in this deck.';
        return;
    }

    const cardEl = cardsContainer.querySelector(`.tarot-card[data-index="${index}"]`);
    if (!cardEl) {
        return;
    }

    isDrawing = true;
    stagePrompt.textContent = 'Drawing...';
    cardEl.classList.remove('interactive');
    cardEl.classList.add('is-shuffling');

    const imageLoaded = await preloadImage(draw.card.imageUrl);
    await new Promise((resolve) => setTimeout(resolve, 900));

    drawnSlots[index] = draw;
    applyCardFace(cardEl, draw, imageLoaded);
    isDrawing = false;

    renderReadings();

    if (isSpreadComplete()) {
        finishSpread();
    } else {
        updateStagePrompt();
    }
}

function handleCardActivate(e) {
    if (isDrawing || isSpreadComplete()) {
        return;
    }

    const cardEl = e.currentTarget;
    const index = Number(cardEl.dataset.index);

    if (Number.isNaN(index) || drawnSlots[index]) {
        return;
    }

    drawCardAtIndex(index);
}

function handleSpreadChange(e) {
    const btn = e.target.closest('[data-spread]');
    if (!btn || isDrawing) {
        return;
    }

    const newSpread = Number(btn.dataset.spread);
    if (newSpread === spreadCount) {
        closeMenu();
        return;
    }

    updateSpreadButtons(btn);

    const revealed = countDrawn();

    if (revealed > 0 && newSpread > spreadCount) {
        expandSpread(newSpread);
        closeMenu();
        return;
    }

    spreadCount = newSpread;

    if (revealed > 0) {
        resetDraw();
    } else {
        initDrawnSlots();
        renderCardSlots();
        updateStagePrompt();
    }

    persistOptions();
    closeMenu();
}

function handleDeckChange(e) {
    const btn = e.target.closest('[data-deck]');
    if (!btn || isDrawing) {
        return;
    }

    const newDeck = btn.dataset.deck;
    if (newDeck === deckType) {
        closeMenu();
        return;
    }

    deckType = newDeck;
    updateDeckButtons(btn);

    if (countDrawn() > 0) {
        resetDraw();
    } else {
        updateStagePrompt();
    }

    persistOptions();
    closeMenu();
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

menuBackdrop.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
    }
});

drawSettings.addEventListener('click', (e) => {
    if (e.target.closest('[data-spread]')) {
        handleSpreadChange(e);
    } else if (e.target.closest('[data-deck]')) {
        handleDeckChange(e);
    }
});

drawAgainBtn.addEventListener('click', resetDraw);

async function loadAndShowIOSInstallPrompt() {
    if (isEmbed) {
        return;
    }

    try {
        if (!iosInstallModule) {
            iosInstallModule = await import('./ios-install.js');
            iosInstallModule.initIOSInstall(installPrompt, installModal, installClose);
        }
        iosInstallModule.showInstallPromptIfIOS(installPrompt);
    } catch (error) {
        console.warn('Failed to load iOS install module:', error);
    }
}

const savedPrefs = loadPrefs();
spreadCount = savedPrefs.spreadCount;
deckType = savedPrefs.deckType;

initDrawnSlots();
applyOptionsToUI();
renderCardSlots();
updateStagePrompt();
loadAndShowIOSInstallPrompt();

if (isEmbed) {
    initEmbedResize();
}

if (!isEmbed && 'serviceWorker' in navigator) {
    const basePath = getAppBasePath();
    const swUrl = `${basePath}/service-worker.js`;
    const swScope = `${basePath}/`;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(swUrl, { scope: swScope })
            .then((registration) => {
                console.log('ServiceWorker registration successful:', registration.scope);

                setInterval(() => {
                    registration.update();
                }, 60000);

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('New service worker available, reloading...');
                            window.location.reload();
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
