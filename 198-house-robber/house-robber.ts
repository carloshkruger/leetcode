function rob(nums: number[]): number {
  const cache = {}

  function dp(index: number): number {
    if (index >= nums.length) {
      return 0
    }
    if (index in cache) {
      return cache[index]
    }

    const result = nums[index] + Math.max(dp(index + 2), dp(index + 3))
    cache[index] = result
    return result
  }

  return Math.max(dp(0), dp(1))
};