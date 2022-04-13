var appShellFiles = [
    //'/Negocio/styles.css',
    //'/Negocio/fonts.css',
    //'/Negocio/fonts/Roboto-Thin.ttf',
    //'index.html',
    /*'/Negocio/cart.html',
    '/Negocio/payment.html',
    '/Negocio/product.html',
    '/Negocio/shop.html',
    '/Negocio/js/couter.js',
    '/Negocio/js/empty_detection.js',
    '/Negocio/js/image_swaper.js',
    '/Negocio/js/nav_manager.js',
    '/Negocio/js/navbar_btn.js',
    '/Negocio/js/paymentcontroller.js',
    '/Negocio/js/slider.js',
    '/Negocio/img/bg.jpg',
    '/Negocio/img/bgp.jpg',
    '/Negocio/img/card.jpg',
    '/Negocio/img/card2.jpg',
    '/Negocio/img/card3.jpg',
    '/Negocio/img/card4.jpg',
    '/Negocio/img/cart_black.png',
    '/Negocio/img/cart.png',
    '/Negocio/img/cart.svg',
    '/Negocio/img/email.png',
    '/Negocio/img/eye.png',
    '/Negocio/img/eye.svg',
    '/Negocio/img/FB.png',
    '/Negocio/img/IG.png',
    '/Negocio/img/SeductionMX_Logo.png',
    '/Negocio/img/Tab_icon.png',
    '/Negocio/img/TW.png',
    '/Negocio/img/user.png',
    '/Negocio/img/WA.png',*/
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
