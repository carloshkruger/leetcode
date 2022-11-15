function removeDuplicates(nums: number[]): number {
    let writePointer = 1
    
    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== nums[readPointer - 1]) {
            nums[writePointer] = nums[readPointer]
            writePointer++
        }
    }
    return writePointer
};