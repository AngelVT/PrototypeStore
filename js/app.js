if(navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
    console.log("Si jala");
} else {
    console.log("Aquí no jala el service worker!!!")
}