function uniquePaths(m: number, n: number): number {
  const cache = {}

  function helper(m: number, n: number): number {
    const cacheKey = `${m},${n}`
    if (cacheKey in cache) {
      return cache[cacheKey]
    }
    if (m === 0 && n === 0) {
      return 1
    }
    if (m < 0 || n < 0) {
      return 0
    }
    cache[cacheKey] = helper(m - 1, n) + helper(m, n - 1)
    return cache[cacheKey]
  }

  return helper(m - 1, n - 1)
};