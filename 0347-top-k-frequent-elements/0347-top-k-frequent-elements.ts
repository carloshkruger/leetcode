function topKFrequent(nums: number[], k: number): number[] {
    const hashMap = new Map()
    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) ?? 0) + 1)
    }
    return [...hashMap.entries()].sort((a, b) => b[1] - a[1]).map(item => item[0]).slice(0, k)
};