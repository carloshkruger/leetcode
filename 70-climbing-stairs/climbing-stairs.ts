function climbStairs(n: number): number {
  const cache = {}

  function helper(n: number): number {
    if (n in cache) {
      return cache[n]
    }
    if (n < 0) {
      return 0
    }
    if (n === 0) {
      return 1
    }
    cache[n] = helper(n-1) + helper(n-2)
    return cache[n]
  }

  return helper(n)
};