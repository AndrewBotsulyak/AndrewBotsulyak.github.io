this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/TodoList/dist/bundle.css',
        '/TodoList/dist/bundle.js',
        '/TodoList/index.html',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .catch(() => fetch(event.request))
        .then((response) => {
          return caches.open('v1')
            .then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            })
        })
  ).catch(() => {
    return caches.match('/TodoList/index.html');
  });
});