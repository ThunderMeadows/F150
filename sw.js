// The page itself is fetched fresh whenever you are online, so uploading a new index.html is enough.
// Bump the version only if you change the icons or manifest.
const CACHE="f150-build-v3";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const put=(req,res)=>{if(res&&(res.ok||res.type==="opaque")){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));}return res;};
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const page=r.mode==="navigate"||new URL(r.url).pathname.endsWith("index.html");
  if(page){e.respondWith(fetch(r).then(res=>put(r,res)).catch(()=>caches.match(r).then(h=>h||caches.match("index.html"))));return;}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>put(r,res))));
});
