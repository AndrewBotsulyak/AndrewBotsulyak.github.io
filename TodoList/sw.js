const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/TodoList/dist/bundle.css',
  '/TodoList/dist/bundle.js'
];

// self.addEventListener('install', function(event) {
//   // установка
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});