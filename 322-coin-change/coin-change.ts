function coinChange(coins: number[], amount: number): number {
    const cache = {}

    function helper(amount: number): number {
        if (amount in cache) {
            return cache[amount]
        }
        if (amount < 0) {
            return -1
        }
        if (amount === 0) {
            return 0
        }

        let min = Infinity
        for (const coin of coins) {
            const result = helper(amount - coin)
            if (result !== -1) {
                min = Math.min(min, result + 1)
            }
        }
        cache[amount] = min === Infinity ? -1 : min
        return cache[amount]
    }

    return helper(amount)
};