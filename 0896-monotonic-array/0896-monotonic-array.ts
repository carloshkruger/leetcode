function isMonotonic(nums: number[]): boolean {
    if (nums.length < 2) {
        return true
    }
    
    const increasing = nums[0] <= nums.at(-1)
    
    let previous = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (increasing && previous > nums[i]) {
            return false
        }
        if (!increasing && previous < nums[i]) {
            return false
        }
        previous = nums[i]
    }
    
    return true
};