const CACHE_NAME = 'tarot-draw-light-v1';
const STATIC_CACHE = 'tarot-draw-light-static-v1';
const IMAGE_CACHE = 'tarot-draw-light-images-v1';
const BASE_PATH = '/tarot-draw-light';

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/styles.css`,
  `${BASE_PATH}/script.js`,
  `${BASE_PATH}/tarot-data.js`,
  `${BASE_PATH}/ios-install.js`,
  `${BASE_PATH}/manifest.json`
];

const staticAssets = [
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return Promise.allSettled(
          staticAssets.map((url) =>
            cache.add(url).catch((err) => {
              console.warn(`Failed to cache static ${url}:`, err);
              return null;
            })
          )
        );
      }),
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.allSettled(
          urlsToCache.map((url) =>
            cache.add(url).catch((err) => {
              console.warn(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      })
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![CACHE_NAME, STATIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith(BASE_PATH)) {
    const isStaticAsset = staticAssets.some(
      (asset) => url.pathname === asset || url.pathname.endsWith(asset)
    );

    if (isStaticAsset) {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).then((fetchResponse) => {
              const responseToCache = fetchResponse.clone();
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(event.request, responseToCache);
              });
              return fetchResponse;
            })
          );
        })
      );
      return;
    }

    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  if (url.hostname === 'upload.wikimedia.org' && event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) {
            return cached;
          }
          return fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      )
    );
  }
});
