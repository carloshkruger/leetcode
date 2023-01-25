function maxProfit(prices: number[]): number {   
    let maxProfitValue = 0
    let slowRunner = 0
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= prices[slowRunner]) {
            slowRunner = i
        }
        
        const currentProfit = prices[i] - prices[slowRunner]
        
        maxProfitValue = Math.max(maxProfitValue, currentProfit)
    }

    return maxProfitValue
};