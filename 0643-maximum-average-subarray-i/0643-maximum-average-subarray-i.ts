function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = Number.NEGATIVE_INFINITY
    let subarray = []
    let startIndex = 0
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        subarray.push(nums[i])
        sum += nums[i]
        
        if (subarray.length === k) {
            maxAverage = Math.max(maxAverage, sum / subarray.length)
            subarray.shift()
            sum -= nums[startIndex]
            startIndex++
        }
    }
    
    return maxAverage
};