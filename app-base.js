/** Base URL path for this app (no trailing slash), e.g. /tarot-draw-light or '' at site root. */
export function getAppBasePath() {
    const path = location.pathname;
    if (path.endsWith('.html')) {
        return path.slice(0, path.lastIndexOf('/'));
    }
    return path.replace(/\/$/, '') || '';
}

export function isEmbedMode() {
    return (
        document.documentElement.classList.contains('embed-mode') ||
        new URLSearchParams(location.search).has('embed')
    );
}

export function initEmbedResize() {
    if (window.parent === window) {
        return;
    }

    const postHeight = () => {
        window.parent.postMessage(
            {
                type: 'tarot-draw-light:resize',
                height: Math.ceil(document.documentElement.scrollHeight)
            },
            '*'
        );
    };

    postHeight();
    new ResizeObserver(postHeight).observe(document.documentElement);
    window.addEventListener('load', postHeight);
}
