# Tarot Draw Light

A lightweight Progressive Web App for drawing and interpreting tarot cards. Works offline after the first visit.

## Features

- Single-card draw with upright or reversed orientation
- Draw 1, 3, or 5 cards at a time
- Filter deck to Major Arcana (22 cards) or Minor Arcana (56 cards)
- Full Rider-Waite-Smith deck (78 cards)
- Card flip animation and interpretation
- Expandable upright and reversed meanings
- Saved draw history (local storage) on a separate history page
- Embeddable iframe widget (`embed.html`) for use on other sites
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

## Embed in an iframe

The app can be embedded on other pages (your blog, portfolio, etc.).

**Embed URL:** `https://<your-github-username>.github.io/tarot-draw-light/embed.html`

### Requirements

| Topic | Notes |
|-------|--------|
| **Framing** | GitHub Pages does not send `X-Frame-Options: DENY`, so cross-site iframes work |
| **HTTPS** | Parent page should use HTTPS (mixed content blocked otherwise) |
| **Size** | Give the iframe a width (~320–480px+) and height (640px+ or auto-resize — see below) |
| **PWA / offline** | Disabled in embed mode (install prompt and service worker skipped) |
| **Storage** | History and preferences use `localStorage`, partitioned per top-level site when embedded on another domain |
| **Sandbox** | Avoid `sandbox` without `allow-scripts allow-same-origin` or the app will break |

### Basic embed

```html
<iframe
  src="https://shawn-cao.github.io/tarot-draw-light/embed.html"
  title="Tarot Draw"
  width="100%"
  height="720"
  style="border:0;max-width:28rem"
  loading="lazy"
></iframe>
```

### Auto-resize height (optional)

The embed posts its content height to the parent. Listen for `tarot-draw-light:resize`:

```html
<script>
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'tarot-draw-light:resize') return;
    const frame = document.getElementById('tarot-embed');
    if (frame) frame.style.height = event.data.height + 'px';
  });
</script>
```

Try **`embed-demo.html`** in this repo for a working example with copy-paste snippet.

You can also append `?embed=1` to `index.html` or `history.html` for the same embed behavior.

## PWA Setup

This app can be installed via **Add to Home Screen**. Icon files (`icon-192.png` and `icon-512.png`) are included.

To regenerate icons (card-back pattern: sun, moon, four-point star):

```bash
npm install
npm run generate-icons
```

Or open `generate-icons-simple.html` in a browser and download the PNGs.

## Files

- `index.html` — Main HTML structure
- `styles.css` — Styling and animations
- `script.js` — Draw logic and UI (ES6 module)
- `history.html` / `history.js` — Past draws page
- `history-store.js` — Local storage for draw history (ES6 module)
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
