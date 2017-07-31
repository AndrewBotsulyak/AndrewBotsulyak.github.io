const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/dist/bundle.css',
  '/dist/bundle.js'
];

self.addEventListener('install', function(event) {
  // установка
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});