const STORAGE_KEY = 'tarot-draw-light-history';
const MAX_ENTRIES = 100;
const REV_SUFFIX = '-rev';

export function cardIdForHistory(cardId, reversed) {
    return reversed ? `${cardId}${REV_SUFFIX}` : cardId;
}

export function parseHistoryCardId(storedId) {
    if (storedId.endsWith(REV_SUFFIX)) {
        return {
            id: storedId.slice(0, -REV_SUFFIX.length),
            reversed: true
        };
    }
    return { id: storedId, reversed: false };
}

function normalizeCardId(card) {
    if (typeof card === 'string') {
        return card;
    }
    if (card.id) {
        return cardIdForHistory(card.id, Boolean(card.reversed));
    }
    return 'unknown';
}

export function loadHistory() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.map(normalizeEntry) : [];
    } catch {
        return [];
    }
}

function normalizeEntry(entry) {
    const drawnAt =
        typeof entry.drawnAt === 'number'
            ? entry.drawnAt
            : Date.parse(entry.drawnAt) || Date.now();

    const cards = (entry.cards || []).map(normalizeCardId);

    return {
        drawnAt,
        spreadCount: entry.spreadCount,
        deckType: entry.deckType,
        cards
    };
}

export function saveDraw(entry) {
    const history = loadHistory();
    history.unshift(entry);

    if (history.length > MAX_ENTRIES) {
        history.length = MAX_ENTRIES;
    }

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        return true;
    } catch {
        return false;
    }
}

export function clearHistory() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch {
        return false;
    }
}

export function formatDrawnAt(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

export function buildHistoryEntry(draws, spreadCount, deckType) {
    return {
        drawnAt: Date.now(),
        spreadCount,
        deckType,
        cards: draws.map(({ card, reversed }) => cardIdForHistory(card.id, reversed))
    };
}
