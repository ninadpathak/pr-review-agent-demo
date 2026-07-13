// Tiny in-memory cache with TTL.
const store = new Map();

function set(key, value, ttlMs = 60_000) {
  store.set(key, { value, expiresAt: Date.now() + ttlMs });
}

function get(key) {
  const entry = store.get(key);
  if (!entry) return undefined;
  if (entry.expiresAt < Date.now()) {
    store.delete(key);
  }
  return entry.value;
}

function prune() {
  for (const [key, entry] of store) {
    if (entry.expiresAt >= Date.now()) store.delete(key);
  }
}

module.exports = { set, get, prune };
