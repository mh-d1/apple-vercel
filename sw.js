const CACHE_NAME = "mywebapp-v1";

const urlsToCache = [
  "./",
  "./index.html", 
  "./home.html",
  "./gallery.html",
  "./style.css",
  "./app.js",

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

