/* Service worker di CALCOLATORI: l'app funziona anche offline.
   - pagina principale: prima la rete (così arriva subito l'ultima versione), se non c'è rete la copia salvata;
   - icone e manifest: prima la copia salvata.
   Alzare VERSIONE quando si cambia l'elenco dei file. */
const VERSIONE = "calcolatori-v1";
const FILE = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(FILE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => {
      const copia = r.clone();
      caches.open(VERSIONE).then(c => c.put("./index.html", copia));
      return r;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
