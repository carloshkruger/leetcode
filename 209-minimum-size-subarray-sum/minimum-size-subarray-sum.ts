function minSubArrayLen(target: number, nums: number[]): number {
  let minSize = Infinity
  let leftIndex = 0
  let currentSum = 0
  let currentSize = 0

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    currentSize++

    while (currentSum >= target) {
      minSize = Math.min(minSize, currentSize)
      currentSum -= nums[leftIndex]
      leftIndex++
      currentSize--
    }
  }

  if (minSize === Infinity) {
    return 0
  }

  return minSize
};