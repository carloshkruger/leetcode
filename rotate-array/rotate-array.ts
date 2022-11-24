/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const auxList = []
    
    k = k > nums.length ? k % nums.length : k 
    
    for (let i = nums.length - 1; i >= nums.length - k; i--) {
        auxList.push(nums[i])
    }

    for (let i = nums.length - 1; i >= k; i--) {
        nums[i] = nums[i-k]
    }

    let begin = 0
    for (let i = auxList.length - 1; i >= 0; i--) {
        if (auxList[i] !== undefined) {
            nums[begin] = auxList[i]
            begin++
        }
    }
};