function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            return [hashMap.get(nums[i]), i]
        }
        hashMap.set((target - nums[i]), i)
    }

    return [-1, -1]
};