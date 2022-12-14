function findLHS(nums: number[]): number {
    const map = new Map()
    let maxLength = 0
    
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }
                
    for (const key of map.keys()) {
        if (map.has(key + 1)) {
            maxLength = Math.max(maxLength, map.get(key) + map.get(key + 1))
        }
    }
        
    return maxLength
};