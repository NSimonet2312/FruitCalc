self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('fruit-calc-cache').then((cache) => {
        return cache.addAll([
          '/calculateur-fruit/index.html',
          '/calculateur-fruit/style.css',
          '/calculateur-fruit/bootstrap-5.3.3-dist/css/bootstrap.min.css',
          '/calculateur-fruit/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });