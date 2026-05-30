import { tarotDeck } from './tarot-data.js';

const MAJOR_ARCANA_COUNT = 22;

const cardsContainer = document.getElementById('cards-container');
const stagePrompt = document.getElementById('stage-prompt');
const readingsSection = document.getElementById('readings');
const drawAgainBtn = document.getElementById('draw-again');
const drawSettings = document.getElementById('draw-settings');
const installPrompt = document.getElementById('install-prompt');
const installModal = document.getElementById('install-modal');
const installClose = document.getElementById('install-close');

let spreadCount = 1;
let deckType = 'major';
let isDrawing = false;
let hasDrawn = false;
let iosInstallModule = null;

function getFilteredDeck(type) {
    if (type === 'major') {
        return tarotDeck.slice(0, MAJOR_ARCANA_COUNT);
    }
    return tarotDeck.slice(MAJOR_ARCANA_COUNT);
}

function pickCards(count, type) {
    const pool = [...getFilteredDeck(type)];
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

function createCardElement(index) {
    const card = document.createElement('div');
    card.className = 'tarot-card interactive';
    card.dataset.index = String(index);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'Draw a tarot card');

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
                    <img src="" alt="" hidden>
                    <div class="card-fallback" hidden>
                        <p class="card-fallback-meaning"></p>
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
            handleCardActivate();
        }
    });

    return card;
}

function renderCardSlots() {
    cardsContainer.className = `cards-container cards-count-${spreadCount}`;
    cardsContainer.replaceChildren();

    for (let i = 0; i < spreadCount; i++) {
        cardsContainer.appendChild(createCardElement(i));
    }
}

function setSettingsEnabled(enabled) {
    drawSettings.querySelectorAll('.option').forEach((btn) => {
        btn.disabled = !enabled;
    });
}

function updateStagePrompt() {
    if (hasDrawn) {
        stagePrompt.textContent = '';
        return;
    }

    const deckLabel = deckType === 'major' ? 'Major Arcana' : 'Minor Arcana';
    if (spreadCount === 1) {
        stagePrompt.textContent = `Tap the card to draw from ${deckLabel}`;
    } else {
        stagePrompt.textContent = `Tap to draw ${spreadCount} cards from ${deckLabel}`;
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
    const img = el.querySelector('img');
    const fallback = el.querySelector('.card-fallback');
    const fallbackMeaning = el.querySelector('.card-fallback-meaning');
    const name = el.querySelector('.card-name');
    const meaning = draw.reversed ? draw.card.meaning_rev : draw.card.meaning_up;

    name.textContent = draw.card.name;
    content.classList.toggle('reversed', draw.reversed);
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

function renderReadings(draws) {
    readingsSection.replaceChildren();

    draws.forEach(({ card, reversed }, index) => {
        const item = document.createElement('article');
        item.className = 'reading-item';

        const positionLabel = spreadCount > 1 ? `Card ${index + 1}` : 'Your Reading';

        item.innerHTML = `
            <div class="card-header">
                <h2>${positionLabel}: ${card.name}</h2>
                <span class="badge ${reversed ? 'reversed' : 'upright'}">${reversed ? 'Reversed' : 'Upright'}</span>
            </div>
            <p class="reading-meaning">${reversed ? card.meaning_rev : card.meaning_up}</p>
            <details class="full-meanings">
                <summary>View upright &amp; reversed meanings</summary>
                <div class="meaning-block">
                    <h3>Upright</h3>
                    <p>${card.meaning_up}</p>
                </div>
                <div class="meaning-block">
                    <h3>Reversed</h3>
                    <p>${card.meaning_rev}</p>
                </div>
            </details>
        `;

        readingsSection.appendChild(item);
    });

    readingsSection.classList.remove('hidden');
}

function resetDraw() {
    isDrawing = false;
    hasDrawn = false;

    renderCardSlots();
    readingsSection.classList.add('hidden');
    readingsSection.replaceChildren();
    drawAgainBtn.classList.add('hidden');
    setSettingsEnabled(true);
    updateStagePrompt();
}

async function handleDraw() {
    if (isDrawing || hasDrawn) {
        return;
    }

    isDrawing = true;
    setSettingsEnabled(false);
    stagePrompt.textContent = 'Drawing...';

    const cardEls = cardsContainer.querySelectorAll('.tarot-card');
    cardEls.forEach((el) => {
        el.classList.remove('interactive');
        el.classList.add('is-shuffling');
    });

    const draws = pickCards(spreadCount, deckType);

    const imageLoaded = await Promise.all(
        draws.map(({ card }) => preloadImage(card.imageUrl))
    );
    await new Promise((resolve) => setTimeout(resolve, 900));

    cardEls.forEach((el, index) => {
        const draw = draws[index];
        if (!draw) {
            return;
        }

        applyCardFace(el, draw, imageLoaded[index]);
    });

    renderReadings(draws);
    drawAgainBtn.classList.remove('hidden');
    hasDrawn = true;
    isDrawing = false;
    stagePrompt.textContent = '';
}

function handleCardActivate() {
    if (isDrawing || hasDrawn) {
        return;
    }
    handleDraw();
}

function handleSpreadChange(e) {
    const btn = e.target.closest('[data-spread]');
    if (!btn || btn.disabled) {
        return;
    }

    spreadCount = Number(btn.dataset.spread);
    drawSettings.querySelectorAll('[data-spread]').forEach((option) => {
        const isActive = option === btn;
        option.classList.toggle('active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
    });

    renderCardSlots();
    updateStagePrompt();
}

function handleDeckChange(e) {
    const btn = e.target.closest('[data-deck]');
    if (!btn || btn.disabled) {
        return;
    }

    deckType = btn.dataset.deck;
    drawSettings.querySelectorAll('[data-deck]').forEach((option) => {
        const isActive = option === btn;
        option.classList.toggle('active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
    });

    updateStagePrompt();
}

drawSettings.addEventListener('click', (e) => {
    if (e.target.closest('[data-spread]')) {
        handleSpreadChange(e);
    } else if (e.target.closest('[data-deck]')) {
        handleDeckChange(e);
    }
});

drawAgainBtn.addEventListener('click', resetDraw);

async function loadAndShowIOSInstallPrompt() {
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

renderCardSlots();
updateStagePrompt();
loadAndShowIOSInstallPrompt();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/tarot-draw-light/service-worker.js', {
            scope: '/tarot-draw-light/'
        })
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
