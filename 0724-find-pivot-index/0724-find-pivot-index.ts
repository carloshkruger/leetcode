function pivotIndex(nums: number[]): number {
    let sumRight = nums.reduce((agg, item) => agg + item, 0)       
    let sumLeft = 0
    
    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i]
        if (sumLeft === sumRight) {
            return i
        }
        sumLeft += nums[i]
    }
        
    return -1
};
