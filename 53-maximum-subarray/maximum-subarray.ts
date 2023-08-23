function maxSubArray(nums: number[]): number {
    let largestSum = -Infinity
    let currentSum = 0

    for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
        if (currentSum < 0 && nums[rightIndex] > currentSum) {
            currentSum = nums[rightIndex]
        } else {
            currentSum += nums[rightIndex]
        }

        largestSum = Math.max(largestSum, currentSum)
    }

    return largestSum
};