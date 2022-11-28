function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined && Math.abs(i - hashMap[nums[i]]) <= k) {
            return true
        }
        hashMap[nums[i]] = i
    }
    return false
};