var appShellFiles = [
    '/PrototypeStore-v0.1.0/styles.css',
    '/PrototypeStore-v0.1.0/fonts.css',
    '/PrototypeStore-v0.1.0/fonts/Roboto-Thin.ttf',
    '/PrototypeStore-v0.1.0/index.html',
    '/PrototypeStore-v0.1.0/cart.html',
    '/PrototypeStore-v0.1.0/payment.html',
    '/PrototypeStore-v0.1.0/product.html',
    '/PrototypeStore-v0.1.0/shop.html',
    '/PrototypeStore-v0.1.0/js/couter.js',
    '/PrototypeStore-v0.1.0/js/empty_detection.js',
    '/PrototypeStore-v0.1.0/js/image_swaper.js',
    '/PrototypeStore-v0.1.0/js/nav_manager.js',
    '/PrototypeStore-v0.1.0/js/navbar_btn.js',
    '/PrototypeStore-v0.1.0/js/paymentcontroller.js',
    '/PrototypeStore-v0.1.0/js/slider.js',
    '/PrototypeStore-v0.1.0/img/bg.jpg',
    '/PrototypeStore-v0.1.0/img/bgp.jpg',
    '/PrototypeStore-v0.1.0/img/card.jpg',
    '/PrototypeStore-v0.1.0/img/card2.jpg',
    '/PrototypeStore-v0.1.0/img/card3.jpg',
    '/PrototypeStore-v0.1.0/img/card4.jpg',
    '/PrototypeStore-v0.1.0/img/cart_black.png',
    '/PrototypeStore-v0.1.0/img/cart.png',
    '/PrototypeStore-v0.1.0/img/cart.svg',
    '/PrototypeStore-v0.1.0/img/email.png',
    '/PrototypeStore-v0.1.0/img/eye.png',
    '/PrototypeStore-v0.1.0/img/eye.svg',
    '/PrototypeStore-v0.1.0/img/FB.png',
    '/PrototypeStore-v0.1.0/img/IG.png',
    '/PrototypeStore-v0.1.0/img/SeductionMX_Logo.png',
    '/PrototypeStore-v0.1.0/img/Tab_icon.png',
    '/PrototypeStore-v0.1.0/img/TW.png',
    '/PrototypeStore-v0.1.0/img/user.png',
    '/PrototypeStore-v0.1.0/img/WA.png',
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
