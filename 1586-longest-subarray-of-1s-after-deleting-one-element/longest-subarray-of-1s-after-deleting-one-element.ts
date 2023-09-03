function longestSubarray(nums: number[]): number {
  let onesCount = 0
  let windowStart = 0
  let longest = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) {
      onesCount++
      
    }
    if (windowEnd - windowStart + 1 - onesCount > 1) {
      if (nums[windowStart] === 1) {
        onesCount--
      }
      windowStart++
    }

    longest = Math.max(longest, windowEnd - windowStart + 1)
  }

  return longest > 0 ? longest - 1 : 0
};