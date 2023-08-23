function maxSubArray(nums: number[]): number {
    let largestSum = -Infinity
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0 && nums[i] > currentSum) {
            currentSum = nums[i]
        } else {
            currentSum += nums[i]
        }

        largestSum = Math.max(largestSum, currentSum)
    }

    return largestSum
};