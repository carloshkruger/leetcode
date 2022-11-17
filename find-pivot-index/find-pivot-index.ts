function pivotIndex(nums: number[]): number {
    const length = nums.length - 1
    const sumLeft = [0]
    const sumRight = [0]
    
    for (let i = 1; i <= length; i++) {
        sumLeft.push(nums[i-1] + (sumLeft.at(-1) ?? 0))        
    }
    
    for (let i = length - 1; i >= 0; i--) {
        sumRight.push(nums[i+1] + (sumRight.at(-1) ?? 0))        
    }
                          
    for (let i = 0; i <= length; i++) {
        if (sumLeft[i] === sumRight.at((i*-1) - 1)) {
            return i
        }
    }
        
    return -1
};