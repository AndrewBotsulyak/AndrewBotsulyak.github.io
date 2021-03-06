const PATH_PROD = [
        '/TodoList/bundle.css',
        '/TodoList/main.js',
        '/TodoList/todo-item.js',
        '/TodoList/index.html',
        '/TodoList/images/add.svg',
        '/TodoList/images/checked.svg',
        '/TodoList/images/edit.svg',
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

const VERSION = 'v2';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(VERSION).then(function(cache) {
      return cache.addAll(PATH_PROD);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .catch(() => fetch(event.request))
        .then((response) => {
          return caches.open(VERSION)
            .then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            })
        }).catch(() => {
            return caches.match('/TodoList/index.html');
          })
  )
});

self.addEventListener('activate', function(event) {
  let cacheWhitelist = [VERSION];

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