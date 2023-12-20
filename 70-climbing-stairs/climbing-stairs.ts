function climbStairs(n: number): number {
    let cache = {}

    function dp(n: number): number {
        if (n < 0) {
            return 0
        }
        if (n === 0) {
            return 1
        }
        if (cache[n]) {
            return cache[n]
        }
        
        cache[n] = dp(n - 1) + dp(n - 2)
        return cache[n]
    }

    return dp(n)
};