function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = Number.NEGATIVE_INFINITY
    let startIndex = 0
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        if (i + 1 >= k) {
            maxAverage = Math.max(maxAverage, sum / k)
            sum -= nums[startIndex]
            startIndex++
        }
    }
    
    return maxAverage
};