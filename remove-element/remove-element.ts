function removeElement(nums: number[], val: number): number {
    let startIndex = 0
    let endIndex = nums.length - 1
    
    while (startIndex <= endIndex) {
        if (nums[startIndex] === val && nums[endIndex] !== val) {
            [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]]
            startIndex++
            endIndex--
        } else if (nums[endIndex] === val) {
            endIndex--
        } else {
            startIndex++
        }
    }
    
    console.log(nums)
    
    return startIndex
};