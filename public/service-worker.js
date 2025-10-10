const CACHE_NAME = "tiles-offline-v2"
const PRECACHE_URLS = [
  "/",
  "/philosophy",
  "/roadmap",
  // images and icons to ensure offline rendering on first load
  "/neurons_new.png",
  "/neurons-logo.svg",
  "/dark.png",
  "/dark.svg",
  "/light.png",
  "/light.svg",
  "/placeholder.svg",
  "/placeholder.jpg",
  "/placeholder-logo.svg",
  "/placeholder-logo.png",
  "/placeholder-user.jpg",
  "/favicon-96x96.png",
  "/favicon.svg",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
            return undefined
          }),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event

  if (request.method !== "GET") {
    return
  }

  const isNavigationRequest =
    request.mode === "navigate" ||
    (request.headers.get("accept")?.includes("text/html") ?? false)

  if (isNavigationRequest) {
    event.respondWith(networkFirst(request))
    return
  }

  if (request.destination && ["style", "script", "image", "font"].includes(request.destination)) {
    event.respondWith(cacheFirst(request))
  }
})

self.addEventListener("message", (event) => {
  if (event.data?.type === "SYNC_NAVIGATION_CACHE") {
    event.waitUntil(precacheNavigation())
  }
})

async function precacheNavigation() {
  const cache = await caches.open(CACHE_NAME)
  await Promise.all(
    PRECACHE_URLS.map(async (url) => {
      try {
        const response = await fetch(url, { cache: "reload" })
        if (response && response.ok) {
          await cache.put(url, response.clone())
        }
      } catch (error) {
        console.warn("Failed to refresh cached page", url, error)
      }
    }),
  )
}

async function networkFirst(request) {
  try {
    const freshResponse = await fetch(request)
    const cache = await caches.open(CACHE_NAME)
    cache.put(request, freshResponse.clone())
    return freshResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    throw error
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }

  const response = await fetch(request)
  const cache = await caches.open(CACHE_NAME)
  cache.put(request, response.clone())
  return response
}
