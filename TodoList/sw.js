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
          return caches.open('v2')
            .then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            })
        }).catch(() => {
            return caches.match('/TodoList/index.html');
          })
  )
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});