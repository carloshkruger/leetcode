function searchInsert(nums: number[], target: number): number {
    let begin = 0
    let end = nums.length - 1
    
    while (begin <= end) {       
        const middleIndex = Math.floor((begin + end) / 2)
        
        if (nums[middleIndex] === target) {
            return middleIndex
        } else if (nums[middleIndex] > target) {
            end = middleIndex - 1
        } else {
            begin = middleIndex + 1
        }
    }
    
    return begin
};