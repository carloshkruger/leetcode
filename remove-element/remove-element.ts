function removeElement(nums: number[], val: number): number {
    const length = nums.length - 1
    let start = 0
    let end = length
    
    while (end >= start) {
        if (nums[start] === val) {
            [nums[end], nums[start]] = [nums[start], nums[end]]
            end--
        } else {
            start++
        }
    }

    return start
};