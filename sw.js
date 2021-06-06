const cacheName = 'drylozu-v1.1';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/styles.css',
                '/assets/images/avatar.gif',
                '/assets/images/background.gif',
                '/assets/images/background2.gif',
                '/assets/images/technologies/cpp.png',
                '/assets/images/technologies/cs.png',
                '/assets/images/technologies/dart.png',
                '/assets/images/technologies/graphql.png',
                '/assets/images/technologies/html.png',
                '/assets/images/technologies/java.png',
                '/assets/images/technologies/javascript.png',
                '/assets/images/technologies/kotlin.png',
                '/assets/images/technologies/mongodb.png',
                '/assets/images/technologies/python.png',
                '/assets/images/technologies/react.png',
                '/assets/images/technologies/ruby.png',
                '/assets/images/technologies/sql.png',
                '/assets/images/technologies/vue.png',
                '/assets/images/technologies/webpack.png'
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then((cache) => cache.match(event.request, { ignoreSearch: true }))
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});