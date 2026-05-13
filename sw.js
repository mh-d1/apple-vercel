const CACHE_NAME = "my-webapp-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/home.html",
  "/gallery.html",
  "/style.css",
  "/app.js",
  "/images/logo.png",
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg"  
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );

});