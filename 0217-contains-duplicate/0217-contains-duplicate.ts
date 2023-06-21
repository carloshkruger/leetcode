function containsDuplicate(nums: number[]): boolean {
    const hashMap = new Map()
    for (const num of nums) {
        if (hashMap.has(num)) {
            return true
        }
        hashMap.set(num, true)
    }
    return false
};