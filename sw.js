var appShellFiles = [
    '/PrototypeStore/styles.css',
    '/PrototypeStore/fonts.css',
    '/PrototypeStore/fonts/Roboto-Thin.ttf',
    '/PrototypeStore/index.html',
    '/PrototypeStore/cart.html',
    '/PrototypeStore/payment.html',
    '/PrototypeStore/product.html',
    '/PrototypeStore/shop.html',
    '/PrototypeStore/img/TabIcon.png',
    '/PrototypeStore/js/counter.js',
    '/PrototypeStore/js/empty_detection.js',
    '/PrototypeStore/js/image_swaper.js',
    '/PrototypeStore/js/nav_manager.js',
    '/PrototypeStore/js/navbar_btn.js',
    '/PrototypeStore/js/paymentcontroller.js',
    '/PrototypeStore/js/slider.js',
    '/PrototypeStore/img/bg.jpg',
    '/PrototypeStore/img/bgp.jpg',
    '/PrototypeStore/img/card.jpg',
    '/PrototypeStore/img/card2.jpg',
    '/PrototypeStore/img/card3.jpg',
    '/PrototypeStore/img/card4.jpg',
    '/PrototypeStore/img/cart_black.png',
    '/PrototypeStore/img/cart.png',
    '/PrototypeStore/img/cart.svg',
    '/PrototypeStore/img/email.png',
    '/PrototypeStore/img/eye.png',
    '/PrototypeStore/img/eye.svg',
    '/PrototypeStore/img/FB.png',
    '/PrototypeStore/img/IG.png',
    '/PrototypeStore/img/SeductionMX_Logo.png',
    '/PrototypeStore/img/TW.png',
    '/PrototypeStore/img/user.png',
    '/PrototypeStore/img/WA.png',
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
