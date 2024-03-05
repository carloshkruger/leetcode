function minSubArrayLen(target: number, nums: number[]): number {
  let windowStart = 0
  let minLength = Infinity
  let currentSum = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd]

    while (currentSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      currentSum -= nums[windowStart]
      windowStart++
    }
  }

  if (minLength === Infinity) {
    return 0
  }
  return minLength
};