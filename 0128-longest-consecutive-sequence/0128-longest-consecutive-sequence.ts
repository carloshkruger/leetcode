function longestConsecutive(nums: number[]): number {
    nums.sort((a,b) => a-b)
    
    let longest = 0
    let current = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            continue
        }
        current++
        if (nums[i] + 1 !== nums[i+1]) {
            longest = Math.max(longest, current)
            current = 0
        }
    }
    
    return longest
};