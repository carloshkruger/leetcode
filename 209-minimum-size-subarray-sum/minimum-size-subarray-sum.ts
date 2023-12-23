function minSubArrayLen(target: number, nums: number[]): number {
  let minSize = Infinity
  let leftIndex = 0
  let currentSum = 0

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]

    while (currentSum >= target) {
      minSize = Math.min(minSize, i - leftIndex + 1)
      currentSum -= nums[leftIndex]
      leftIndex++
    }
  }

  if (minSize === Infinity) {
    return 0
  }

  return minSize
};