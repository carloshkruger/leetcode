function repeatedNTimes(nums: number[]): number {
    const repeatTimes = nums.length / 2
    const map = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1
        } else if (map[nums[i]] === repeatTimes - 1) {
            return nums[i]
        } else {
            map[nums[i]] += 1
        }
    }
    
    return -1
};