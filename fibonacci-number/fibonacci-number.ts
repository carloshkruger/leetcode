function fib(n: number): number {
    const cache = {}
    
    function helper(value) {
        if (value in cache) {
            return cache[value]
        }
        if (value <= 1) {
            return value
        }
        cache[value] = fib(n - 1) + fib(n - 2)
        return cache[value]
    }
    
    return helper(n)
};