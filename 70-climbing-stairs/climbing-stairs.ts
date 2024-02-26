function climbStairs(n: number): number {
  const cache = new Map()

  function helper(n: number) {
    if (cache.has(n)) {
      return cache.get(n)
    }
    if (n < 0) {
      return 0
    }
    if (n === 0) {
      return 1
    }
    const result = helper(n-1) + helper(n-2)
    cache.set(n, result)
    return result
  }

  return helper(n)
};