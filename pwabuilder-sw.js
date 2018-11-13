//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
  "./css/boostrap.min.css",
  "./css/font-awesome.min.css",
  "./css/power.css",
  "./css/speed.css",
  "./css/style.css",
  "./generationInfo.json",
  "./icons/android/android-launchericon-144-144.png",
  "./icons/android/android-launchericon-192-192.png",
  "./icons/android/android-launchericon-48-48.png",
  "./icons/android/android-launchericon-512-512.png",
  "./icons/android/android-launchericon-72-72.png",
  "./icons/android/android-launchericon-96-96.png",
  "./icons/chrome/chrome-extensionmanagementpage-48-48.png",
  "./icons/chrome/chrome-favicon-16-16.png",
  "./icons/chrome/chrome-installprocess-128-128.png",
  "./index.html",
  "./js/anime.min.js",
  "./js/bootstrap.min.js",
  "./js/jquery.min.js",
  "./js/popper.min.js",
  "./js/power.js",
  "./js/script.js",
  "./js/speed.js",
  "./manifest.json",
  "./power.html",
  "./pwabuilder-sw.js",
  "./speed.html"

];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[PWA Builder] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  console.log('[PWA Builder] The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  return fetch(request).then(function(response){ return response});
}
