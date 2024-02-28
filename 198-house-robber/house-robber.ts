function rob(nums: number[]): number {
  const cache = {}

  function helper(index: number): number {
    if (index in cache) {
      return cache[index]
    }
    if (index >= nums.length) {
      return 0
    }

    cache[index] = nums[index] + Math.max(helper(index + 2), helper(index + 3))
    return cache[index]
  }

  return Math.max(helper(0), helper(1))
};