import { cardById } from './tarot-data.js';
import { loadHistory, clearHistory, formatDrawnAt, parseHistoryCardId } from './history-store.js';

const historyList = document.getElementById('history-list');
const historyEmpty = document.getElementById('history-empty');
const clearHistoryBtn = document.getElementById('clear-history');

function deckLabel(deckType) {
    return deckType === 'major' ? 'Major Arcana' : 'Minor Arcana';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function resolveCard(storedId) {
    const { id, reversed } = parseHistoryCardId(storedId);
    const card = cardById[id];
    if (!card) {
        return {
            name: id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            meaning_up: '',
            meaning_rev: '',
            reversed
        };
    }
    return { ...card, reversed };
}

function renderCardRow(storedId, index, spreadCount) {
    const card = resolveCard(storedId);
    const positionLabel = spreadCount > 1 ? `Card ${index + 1}` : 'Reading';
    const meaning = card.reversed ? card.meaning_rev : card.meaning_up;

    return `
        <div class="history-card-row">
            <div class="history-card-header">
                <span class="history-card-position">${escapeHtml(positionLabel)}</span>
                <span class="history-card-name">${escapeHtml(card.name)}</span>
                <span class="badge ${card.reversed ? 'reversed' : 'upright'}">${card.reversed ? 'Reversed' : 'Upright'}</span>
            </div>
            <p class="history-card-meaning">${escapeHtml(meaning)}</p>
        </div>
    `;
}

function renderEntry(entry) {
    const article = document.createElement('article');
    article.className = 'history-entry';
    article.dataset.drawnAt = String(entry.drawnAt);

    const cardsHtml = entry.cards
        .map((storedId, index) => renderCardRow(storedId, index, entry.spreadCount))
        .join('');

    article.innerHTML = `
        <header class="history-entry-header">
            <time datetime="${entry.drawnAt}">${escapeHtml(formatDrawnAt(entry.drawnAt))}</time>
            <span class="history-meta">${entry.spreadCount} card${entry.spreadCount > 1 ? 's' : ''} · ${escapeHtml(deckLabel(entry.deckType))}</span>
        </header>
        <div class="history-entry-cards">${cardsHtml}</div>
    `;

    return article;
}

function render() {
    const history = loadHistory();

    historyList.replaceChildren();

    if (history.length === 0) {
        historyEmpty.classList.remove('hidden');
        clearHistoryBtn.classList.add('hidden');
        return;
    }

    historyEmpty.classList.add('hidden');
    clearHistoryBtn.classList.remove('hidden');

    history.forEach((entry) => {
        historyList.appendChild(renderEntry(entry));
    });
}

clearHistoryBtn.addEventListener('click', () => {
    if (!confirm('Clear all saved draws? This cannot be undone.')) {
        return;
    }
    clearHistory();
    render();
});

render();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/tarot-draw-light/service-worker.js', {
            scope: '/tarot-draw-light/'
        }).catch(() => {});
    });
}
