function findMaxConsecutiveOnes(nums: number[]): number {
    let currentLength = 0
    let maxLength = 0
    for (const num of nums) {
        if (num === 0) {
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