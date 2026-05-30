const STORAGE_KEY = 'tarot-draw-light-prefs';
const VALID_SPREADS = [1, 3, 5];

const DEFAULT_PREFS = {
    spreadCount: 1,
    deckType: 'major'
};

export function loadPrefs() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return { ...DEFAULT_PREFS };
        }

        const parsed = JSON.parse(raw);
        const spreadCount = VALID_SPREADS.includes(parsed.spreadCount)
            ? parsed.spreadCount
            : DEFAULT_PREFS.spreadCount;
        const deckType = parsed.deckType === 'minor' ? 'minor' : 'major';

        return { spreadCount, deckType };
    } catch {
        return { ...DEFAULT_PREFS };
    }
}

export function savePrefs(prefs) {
    const spreadCount = VALID_SPREADS.includes(prefs.spreadCount)
        ? prefs.spreadCount
        : DEFAULT_PREFS.spreadCount;
    const deckType = prefs.deckType === 'minor' ? 'minor' : 'major';

    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ spreadCount, deckType })
        );
        return true;
    } catch {
        return false;
    }
}
