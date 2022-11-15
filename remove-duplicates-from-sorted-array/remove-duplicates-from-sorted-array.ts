function removeDuplicates(nums: number[]): number {
    let startIndex = 0
    let currentValue = nums[0]
    let i = 0
    
    for (i = 0; i < nums.length; i++) {
        if (currentValue !== nums[i + 1]) {
            nums.splice(startIndex, (i - startIndex))
            i = startIndex
            startIndex++
            currentValue = nums[startIndex]
        }
    }
    
    return nums.length
};