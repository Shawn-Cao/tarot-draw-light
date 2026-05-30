# Tarot Draw Light

A lightweight Progressive Web App for drawing and interpreting tarot cards. Works offline after the first visit.

## Features

- Single-card draw with upright or reversed orientation
- Draw 1, 3, or 5 cards at a time
- Filter deck to Major Arcana (22 cards) or Minor Arcana (56 cards)
- Full Rider-Waite-Smith deck (78 cards)
- Card flip animation and interpretation
- Expandable upright and reversed meanings
- Installable PWA with offline support
- No backend required — fully client-side

## Local Development

1. Install dependencies (optional — uses npx):

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   For PWA features (service worker, manifest scope), serve from a path that matches GitHub Pages deployment, or open files directly for basic UI testing.

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, choose `main` and **`/ (root)`**.
4. The site will be live at:

   `https://<your-github-username>.github.io/tarot-draw-light/`

## PWA Setup

This app can be installed via **Add to Home Screen**. Icon files (`icon-192.png` and `icon-512.png`) are included.

To regenerate icons:

1. Open `generate-icons-simple.html` in your browser
2. Download the generated icon files
3. Replace the existing icons in the root directory

## Files

- `index.html` — Main HTML structure
- `styles.css` — Styling and animations
- `script.js` — Draw logic and UI (ES6 module)
- `tarot-data.js` — Full deck data and meanings (ES6 module)
- `ios-install.js` — iOS Safari install prompt (ES6 module)
- `manifest.json` — PWA manifest
- `service-worker.js` — Offline caching
- `package.json` — Local dev server config
- `generate-icons-simple.html` — Browser-based icon generator

## Architecture

Follows the same pattern as [player-chooser](https://github.com/Shawn-Cao/player-chooser):

- Vanilla HTML/CSS/JS with ES6 modules
- No build step
- Service worker caches the app shell and card images after first load
- Tarot deck data adapted from [tarot-draw](https://github.com/Shawn-Cao/tarot-draw)

## License

MIT
