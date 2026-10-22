const CACHE_NAME = 'ptninfo-v5';

const CORE_ASSETS = [
    './2.html',
    './tentang.html',
    './kontak.html',
    './2.css',
    './main.js',
    './search.js',
    './data.json',
    './manifest.json',
    './offline.html',
    './image/icon-192.png',
    './image/icon-512.png',
    './image/SPMB-2025-1631815228.webp',
    './image/UI.jpg',
    './image/Geografi-UGM.jpg',
    './image/170125-Kolam-Intel.jpg',
    './image/unair.jpg',
    './image/rectorate-builiding-ipb-university-bogor-indonesia-building-known-as-andi-hakim-nasoetion-aerial-photo-june-283696000.webp',
    './image/ij11d17kn4vlnm6utuzh.jpg',
    './image/Gambar2111-1-1024x683-1.jpg',
    './image/Program-Studi-Saintek-dengan-Daya-Tampung-Terbanyak-di-Undip.jpg',
    './image/Universitas-Brawijaya.jpg',
    './image/rektorat-universitas-hasanuddin.jpg',
    './image/UNS-Adakan-Wisuda-Sekali-Setiap-Bulan.jpg',
    './image/unand.jpg',
    './image/upi.jpg',
    './image/UNP.jpg',
    './image/usu.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) { return cache.addAll(CORE_ASSETS); })
            .then(function () { return self.skipWaiting(); })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (keys) {
                return Promise.all(
                    keys.filter(function (key) { return key !== CACHE_NAME; })
                        .map(function (key) { return caches.delete(key); })
                );
            })
            .then(function () { return self.clients.claim(); })
    );
});

self.addEventListener('fetch', function (event) {
    if (event.request.method !== 'GET') return;

    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(function (response) {
                    const salinan = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, salinan);
                    });
                    return response;
                })
                .catch(function () {
                    return caches.match(event.request).then(function (cached) {
                        return cached || caches.match('./offline.html');
                    });
                })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function (cached) {
            return cached || fetch(event.request).then(function (response) {
                if (response.ok) {
                    const salinan = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, salinan);
                    });
                }
                return response;
            }).catch(function () {
                return undefined;
            });
        })
    );
});
