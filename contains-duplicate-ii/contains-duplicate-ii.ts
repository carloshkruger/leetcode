function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i]) && Math.abs(i - hashMap.get(nums[i])) <= k) {
            return true
        }
        hashMap.set(nums[i], i)
    }
    return false
};