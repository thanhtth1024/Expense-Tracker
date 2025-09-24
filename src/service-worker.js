const CACHE_NAME = 'expense-tracker-v1'
const ASSETS = [
'/',
'/index.html',
'/src/main.jsx',
'/src/App.jsx',
'/src/styles.css'
]


self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
)
self.skipWaiting()
})


self.addEventListener('activate', event => {
event.waitUntil(clients.claim())
})


self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(resp => resp || fetch(event.request).catch(() => caches.match('/index.html')))
)
})