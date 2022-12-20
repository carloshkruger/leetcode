function topKFrequent(nums: number[], k: number): number[] {
    const hash = new Map()
    
    for (const num of nums) {
        hash.set(num, (hash.get(num) ?? 0) + 1)
    }
                         
    return[...new Set([...hash.entries()].sort((a, b) => b[1] - a[1]).map(item => item[0]))].slice(0, k)
};