function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity
  let currentSum = 0

  for (const num of nums) {
    currentSum = Math.max(currentSum + num, num)
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
};