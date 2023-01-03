function climbStairs(n: number): number {
    let cache = new Map()
    
    function helper(sum: number): number {
        if (sum === 0) {
            return 1
        }
        if (sum < 0) {
            return 0
        }
        if(cache.has(sum)) {
            return cache.get(sum)
        }
        const result = helper(sum-1) + helper(sum-2)
        cache.set(sum, result)
        return result
    }
    
    return helper(n)
};