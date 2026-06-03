const CACHE_NAME = 'notes-mse-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './1000007984.jpg',
  './1000007979_2.jpg',
  './1000007983.jpg'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve Cached Content when Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
