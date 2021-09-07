// Unlock: CacheStorage
// const fileToCache = [
//     '/',
//     '/index.html'
// ]
// const cacheKey = 'static-v1'

self.addEventListener('install', event => {
    console.info('installing...')
    // Unlock: CacheStorage
    // event.waitUntil(caches.open(cacheKey).then(cache => {
    //     return cache.addAll(fileToCache);
    // }))
})

self.addEventListener('activate', event => {
    console.log('now ready to handle fetches!');
    // Unlock: Clearing old cache
    // event.waitUntil(
	// 	caches.keys().then(cacheNames =>
	// 		Promise.all(cacheNames.map((item) => {
	// 			if (item !== cacheName) {
	// 				return caches.delete(item);
	// 			}
	// 		}))
	// ));
});

self.addEventListener('fetch', event => {
    console.log('now fetch!');
    // Unlock: Fetch Event
	// console.log('event.request:', event.request);
	// console.log('[ServiceWorker] Fetch', event.request.url);
    // event.respondWith(
    //     caches.match(event.request).then((response) => {
    //         console.info(response);
    //         return response || fetch(event.request).then(res =>
	// 			caches.open(cacheKey)
	// 			.then(function(cache) {
	// 				cache.put(event.request, res.clone());
	// 				return res;
	// 			})
	// 		);
    //     })
    // )
});