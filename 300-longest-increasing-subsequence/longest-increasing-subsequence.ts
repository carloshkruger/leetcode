function lengthOfLIS(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  const table = new Array(nums.length).fill(0).map(item => ({ maxValue: -Infinity, count: 0 }))
  table[0] = { maxValue: nums[0], count: 1 }

  let longest = 1

  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let maxCount = 0
    while (j >= 0) {
      if (nums[i] > table[j].maxValue) {
        maxCount = Math.max(maxCount, table[j].count)
      }
      j--
    }
    maxCount++
    table[i] = { maxValue: nums[i], count: maxCount }
    longest = Math.max(longest, maxCount)
  }

  return longest
};