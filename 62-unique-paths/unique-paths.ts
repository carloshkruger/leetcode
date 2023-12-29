function uniquePaths(m: number, n: number): number {
    const cache = new Map()

    function dp(m: number, n: number): number {
        if (m < 0 || n < 0) {
            return 0
        }
        if (m === 0 && n === 0) {
            return 1
        }
        const key = `${m}-${n}`
        if (cache.has(key)) {
            return cache.get(key)
        }
        
        const result = dp(m - 1, n) + dp(m, n - 1)
        cache.set(key, result)
        return result
    }

    return dp(m-1, n-1)
};