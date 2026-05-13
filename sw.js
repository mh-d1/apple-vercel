const CACHE_NAME = "my-webapp-cache-v1";

const urlsToCache = [
  "/",
  "/one.html",
  "/usn.html",
  "/home.html",
  "/gallery.html",
  "/style.css",
  "/app.js",
  "/auth.js"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );

});

self.addEventListener("install", () => {
  console.log("Service Worker Installed");
});

