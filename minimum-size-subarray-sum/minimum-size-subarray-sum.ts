function minSubArrayLen(target: number, nums: number[]): number {
    let currentSum = 0
    let currentItemsCount = 0
    let startIndex = 0
    let smallestLength = Number.MAX_VALUE
    
    for (const num of nums) {
        currentSum += num
        currentItemsCount++
        
        while (currentSum >= target) {
            smallestLength = Math.min(smallestLength, currentItemsCount)
            currentSum -= nums[startIndex]
            currentItemsCount--
            startIndex++
        }
    }
    
    if (smallestLength === Number.MAX_VALUE) {
        return 0
    }
    
    return smallestLength
};