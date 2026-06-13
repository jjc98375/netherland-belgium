/* 최소 서비스워커: 설치 가능 조건 충족 + 네트워크 우선 (항상 최신) */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
