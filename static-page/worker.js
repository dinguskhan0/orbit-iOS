const cacheName = 'orbit-ios-v35'

self.addEventListener("install", (e) => {
  console.log('install')
  self.skipWaiting()
})

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return
          }
          console.log('delete old cache')
          return caches.delete(key);
        })
      )
    })
  )
})

self.addEventListener("fetch", (e) => {
  try {
    e.respondWith(
      (async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) {
          return r;
        }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
      })()
    );
  } catch (e) {
    
  }

});