function lengthOfLIS(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  const table: { maxValue: number, count: number }[] = []
  table.push({ maxValue: nums[0], count: 1 })

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
    table.push({ maxValue: nums[i], count: maxCount })
    longest = Math.max(longest, maxCount)
  }

  return longest
};