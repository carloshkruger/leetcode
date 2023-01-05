function myPow(x: number, n: number): number {    
    function helper(x: number, n: number): number {
        if (x === 0) {
            return 0
        }
        if (n === 0) {
            return 1
        }
        
        
        const restMultiplier = n % 2 === 0 ? 1 : x
        const result = helper(x, Math.floor(n / 2))
        return result * result * restMultiplier
    }
    
    const result = helper(x, Math.abs(n))
    
    if (n > 0) {
        return result
    }
    
    return 1 / result
};