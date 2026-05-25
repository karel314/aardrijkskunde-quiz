const CACHE_VERSION = 'ak-h1h4-v3.0';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './manifest.json',
  './data/vragen.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/bron7_neerslag_afvoer.png',
  './images/bron8_berliner_hutte.png',
  './images/bron9_vertragingstijd.png',
  './images/bron10_dwarsprofiel.png',
  './images/bron12_dwarsprofiel2.png',
  './images/bron13_rivierenlandschap.png',
  './images/bron14_rivierengebied.png',
  './images/bron20_drietrapsstrategie.png',
  './images/bron21_nederland2070.png',
  './images/bron24_overstromingsgebieden.png',
  './images/bron25_deltawerken.png',
  './images/bron28_waterhouderij.png',
  './images/bron29_hoofdwatersysteem.png',
  './images/bron30_verzilting.png',
  './images/bron36_maatregelen.png',
  './images/bron38_stuwen.png',
  './images/bron39_ijsselmeerpeil.png',
  './images/bron4_vestigingen_babyspullen.png',
  './images/bron6_smart_city.png',
  './images/bron9_broedplaatsen_utrecht.png',
  './images/bron10_groei_krimp.png',
  './images/bron12_distributiecentra.png',
  './images/bron17_kenmerken_arbeiderswijken.png',
  './images/bron18_wooncarriere.png',
  './images/bron20_buurtprofielen.png',
  './images/bron24_sociale_veiligheid.png',
  './images/bron27_wijkindeling_utrecht.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
