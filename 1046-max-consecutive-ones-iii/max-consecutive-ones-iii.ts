function longestOnes(nums: number[], k: number): number {
  let windowStart = 0
  let maxLength = 0
  let onesCount = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) {
      onesCount++
    }
    if (windowEnd - windowStart + 1 - onesCount > k) {
      if (nums[windowStart] === 1) {
        onesCount--
      }
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
};