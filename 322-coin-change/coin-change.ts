function coinChange(coins: number[], amount: number): number {
    const cache = {}

    function helper(amount: number): number {
        if (amount in cache) {
            return cache[amount]
        }
        if (amount === 0) {
            return 0
        }
        if (amount < 0) {
            return -1
        }

        let count = Infinity
        for (const coin of coins) {
            const result = helper(amount - coin)
            if (result !== -1) {
                count = Math.min(count, result + 1)
            }
        }
        
        const result = count === Infinity ? -1 : count
        cache[amount] = result

        return result
    }

    return helper(amount)
};