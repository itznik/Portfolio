// A simple service worker for PWA functionality.

const CACHE_NAME = 'nikunj-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css', // Now caching the static CSS file
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
  'https://i.postimg.cc/BbXjrDBQ/IMG-20250222-115328212.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Serve from cache
        }
        return fetch(event.request); // Fallback to network
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
