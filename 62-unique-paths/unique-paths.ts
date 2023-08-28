function uniquePaths(m: number, n: number, cache = {}): number {
  const cacheKey = `${m}-${n}`
  if (cacheKey in cache) {
    return cache[cacheKey]
  }
  if (m === 1 && n === 1) {
    return 1
  }
  if (m === 1) {
    cache[cacheKey] = uniquePaths(m, n - 1, cache)
    return cache[cacheKey]
  }
  if (n === 1) {
    cache[cacheKey] = uniquePaths(m - 1, n, cache)
    return cache[cacheKey]
  }
  cache[cacheKey] = uniquePaths(m, n - 1, cache) + uniquePaths(m - 1, n, cache)
  return cache[cacheKey]
};