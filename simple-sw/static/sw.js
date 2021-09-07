/* eslint-disable no-restricted-globals -- service worker test*/
self.addEventListener('install', event => {
    console.info('V1 installing…');
  
    // cache a cat jpeg
    event.waitUntil(
      caches.open('static-v1').then(cache => cache.add('/popcat.jpeg'))
    );
  });
  
  self.addEventListener('activate', event => {
    console.info('V1 now ready to handle fetches!');
  });
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    if (url.origin === location.origin && url.pathname === '/doge.jpeg') {
      event.respondWith(caches.match('/popcat.jpeg'));
    }
  });