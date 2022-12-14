function minimumDifference(nums: number[], k: number): number {
    if (nums.length === 1) {
        return 0
    }
    
    nums.sort((a, b) => a - b)
        
    let minimunValue = Number.MAX_VALUE
    let currentSubArray = []
    
    for (let i = 0; i < nums.length; i++) {
        currentSubArray.push(nums[i])
        
        if (currentSubArray.length === k) {
            minimunValue = Math.min(minimunValue, (Math.max(...currentSubArray) - Math.min(...currentSubArray)))

            if (minimunValue === 0) {
                return minimunValue
            }
            
            currentSubArray.shift()
        }
    }
    
    return minimunValue !== Number.MAX_VALUE ? minimunValue : 0
};