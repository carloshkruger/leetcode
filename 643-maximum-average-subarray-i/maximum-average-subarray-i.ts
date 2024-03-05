function findMaxAverage(nums: number[], k: number): number {
  let leftIndex = 0
  let currentSum = 0
  let maxAverage = -Infinity

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]

    if (i >= k - 1) {
      const currentAverage = currentSum / k
      maxAverage = Math.max(maxAverage, currentAverage)
      currentSum -= nums[leftIndex]
      leftIndex++
    }
  }

  return maxAverage
};