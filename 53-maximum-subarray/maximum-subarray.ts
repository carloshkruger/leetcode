function maxSubArray(nums: number[]): number {
    let largestSum = -Infinity
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(currentSum, 0) + nums[i]
        largestSum = Math.max(largestSum, currentSum)
    }

    return largestSum
};