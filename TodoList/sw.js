const PATH_PROD = [
        '/TodoList/dist/bundle.css',
        '/TodoList/dist/main.js',
        '/TodoList/dist/todo-item.js',
        '/TodoList/index.html',
        '/TodoList/dist/images/add.svg',
        '/TodoList/dist/images/checked.svg',
        '/TodoList/dist/images/edit.svg',
        '/TodoList/manifest.json'
];

const PATH_DEV = [
        '/bundle.css',
        '/main.js',
        '/todo-item.js',
        '/index.html',
        '/images/add.svg',
        '/images/checked.svg',
        '/images/edit.svg',
        '/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v3').then(function(cache) {
      return cache.addAll(PATH_PROD);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .catch(() => fetch(event.request))
        .then((response) => {
          return caches.open('v3')
            .then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            })
        }).catch(() => {
            return caches.match('/index.html');
          })
  )
});

self.addEventListener('activate', function(event) {
  let cacheWhitelist = ['v3'];

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