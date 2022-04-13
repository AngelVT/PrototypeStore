var appShellFiles = [
    'AngelVT/PrototypeStore-v0.1.0/styles.css',
    'AngelVT/PrototypeStore-v0.1.0/fonts.css',
    'AngelVT/PrototypeStore-v0.1.0/fonts/Roboto-Thin.ttf',
    'AngelVT/PrototypeStore-v0.1.0/index.html',
    'AngelVT/PrototypeStore-v0.1.0/cart.html',
    'AngelVT/PrototypeStore-v0.1.0/payment.html',
    'AngelVT/PrototypeStore-v0.1.0/product.html',
    'AngelVT/PrototypeStore-v0.1.0/shop.html',
    'AngelVT/PrototypeStore-v0.1.0/js/couter.js',
    'AngelVT/PrototypeStore-v0.1.0/js/empty_detection.js',
    'AngelVT/PrototypeStore-v0.1.0/js/image_swaper.js',
    'AngelVT/PrototypeStore-v0.1.0/js/nav_manager.js',
    'AngelVT/PrototypeStore-v0.1.0/js/navbar_btn.js',
    'AngelVT/PrototypeStore-v0.1.0/js/paymentcontroller.js',
    'AngelVT/PrototypeStore-v0.1.0/js/slider.js',
    'AngelVT/PrototypeStore-v0.1.0/img/bg.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/bgp.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/card.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/card2.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/card3.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/card4.jpg',
    'AngelVT/PrototypeStore-v0.1.0/img/cart_black.png',
    'AngelVT/PrototypeStore-v0.1.0/img/cart.png',
    'AngelVT/PrototypeStore-v0.1.0/img/cart.svg',
    'AngelVT/PrototypeStore-v0.1.0/img/email.png',
    'AngelVT/PrototypeStore-v0.1.0/img/eye.png',
    'AngelVT/PrototypeStore-v0.1.0/img/eye.svg',
    'AngelVT/PrototypeStore-v0.1.0/img/FB.png',
    'AngelVT/PrototypeStore-v0.1.0/img/IG.png',
    'AngelVT/PrototypeStore-v0.1.0/img/SeductionMX_Logo.png',
    'AngelVT/PrototypeStore-v0.1.0/img/Tab_icon.png',
    'AngelVT/PrototypeStore-v0.1.0/img/TW.png',
    'AngelVT/PrototypeStore-v0.1.0/img/user.png',
    'AngelVT/PrototypeStore-v0.1.0/img/WA.png',
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
