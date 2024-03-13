function minCostClimbingStairs(cost: number[]): number {
  const cache = {}

  function helper(index: number): number {
    if (index in cache) {
      return cache[index]
    }
    if (index >= cost.length) {
      return 0
    }

    cache[index] = cost[index] + Math.min(
      helper(index + 1),
      helper(index + 2)
    )
    return cache[index]
  }

  return Math.min(
    helper(0),
    helper(1)
  )
};