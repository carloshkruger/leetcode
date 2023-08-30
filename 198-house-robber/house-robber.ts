function rob(nums: number[]): number {
  if (nums.length < 3) {
    return Math.max(...nums)
  }

  const cache = {}

  function helper(index: number): number {
    if (index in cache) {
      return cache[index]
    }
    if (index >= nums.length) {
      return 0
    }
    cache[index] = Math.max(nums[index] + Math.max(helper(index + 2), helper(index + 3)), helper(index + 1))
    return cache[index]
  }

  return helper(0)
};