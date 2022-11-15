function removeElement(nums: number[], val: number): number {
    const length = nums.length - 1
    let end = length
    let answer = 0
    
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            [nums[end], nums[i]] = [nums[i], nums[end]]
            end--
            i--
        }
        if (end <= i) {
            break
        }
    }
    
    for (let i = 0; i <= length; i++) {
        if (nums[i] !== val) {
            answer++
        } else {
            break
        }
    }
    return answer
};