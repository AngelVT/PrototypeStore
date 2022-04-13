var appShellFiles = [
    '/styles.css',
    '/fonts.css',
    '/fonts/Roboto-Thin.ttf',
    '/index.html',
    '/cart.html',
    '/payment.html',
    '/product.html',
    '/shop.html',
    '/js/couter.js',
    '/js/empty_detection.js',
    '/js/image_swaper.js',
    '/js/nav_manager.js',
    '/js/navbar_btn.js',
    '/js/paymentcontroller.js',
    '/js/slider.js',
    '/img/bg.jpg',
    '/img/bgp.jpg',
    '/img/card.jpg',
    '/img/card2.jpg',
    '/img/card3.jpg',
    '/img/card4.jpg',
    '/img/cart_black.png',
    '/img/cart.png',
    '/img/cart.svg',
    '/img/email.png',
    '/img/eye.png',
    '/img/eye.svg',
    '/img/FB.png',
    '/img/IG.png',
    '/img/SeductionMX_Logo.png',
    '/img/Tab_icon.png',
    '/img/TW.png',
    '/img/user.png',
    '/img/WA.png',
];

self.addEventListener('install', event => {

    const endInstall = caches.open('box').then(cache => {
        return cache.addAll(appShellFiles);
    });

    event.waitUntil(endInstall);

    self.skipWaiting();
});

self.addEventListener('fetch', e => {

    const respuesta = caches.open('box').then(cache => {

        fetch(e.request).then(newsRes =>
            cache.put(e.request, newsRes));

        return cache.match(e.request);

    });

    e.respondWith(respuesta);
});
