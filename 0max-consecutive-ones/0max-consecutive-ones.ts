function findMaxConsecutiveOnes(nums: number[]): number {
    let longest = 0;
    let currentLength = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentLength++
        } else {
            longest = Math.max(longest, currentLength)
            currentLength = 0
        }
    }
    
    return Math.max(longest, currentLength)
};