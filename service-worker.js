/* Bump CACHE_NAME whenever app files change so deployed clients refresh. */
const CACHE_NAME = 'lunari-v2.0.1';
const APP_SHELL = ['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('lunari-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(cached => {
    if (cached) return cached;
    return fetch(req).then(response => {
      if (response && response.ok) { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)); }
      return response;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
  }));
});
