function findMaxConsecutiveOnes(nums: number[]): number {
    let currentLength = 0
    let maxLength = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (currentLength > maxLength) {
                maxLength = currentLength
            }
            currentLength = 0
        } else {
            currentLength++
        }
    }
    if (currentLength > maxLength) {
        maxLength = currentLength
    }
    return maxLength
};