// Font files
const fontFiles = [
    '/fonts/Raleway-Black.ttf',
    '/fonts/Raleway-BlackItalic.ttf',
    '/fonts/Raleway-Medium.ttf',
    '/fonts/Raleway-Regular.ttf',
];

// On install, cache some stuff
addEventListener('install', function (event) {
    console.log('install')
    event.waitUntil(caches.open('core').then(function (cache) {
        fontFiles.forEach(function (file) {
            console.log(file)
            cache.add(new Request(file));
        });
        return;
    }));
});

addEventListener('fetch', function (event) {
    // Get the request
    const request = event.request;

    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    // Images & Fonts
    // Offline-first
    // request.headers.get('Accept').includes('image') || 
    console.log(request.url)
    if (request.url.includes('fonts/')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {
                    // If an image, stash a copy of this image in the images cache
                    return response;
                });
            })
        );
    }
});
