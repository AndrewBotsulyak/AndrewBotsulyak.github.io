this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/TodoList/dist/bundle.css',
        '/TodoList/dist/bundle.js',
        '/TodoList/index.html',
        '/TodoList/dist/images/add.svg',
        '/TodoList/dist/images/checked.svg',
        '/TodoList/dist/images/edit.svg'
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
              cache.put(event.request, response);
              return response.clone();
            })
        }).catch(() => {
            return caches.match('/TodoList/index.html');
          })
  )
});