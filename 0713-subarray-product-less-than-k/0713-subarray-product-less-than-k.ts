function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) {
        return 0
    }
    
    let validSubArrayCount = 0
    let currentProduct = 1
    let leftIndex = 0
    
    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i]

        while (currentProduct >= k) {
            currentProduct /= nums[leftIndex]
            leftIndex++
        }
        
        validSubArrayCount += (i - leftIndex + 1)
    }

    return validSubArrayCount
};