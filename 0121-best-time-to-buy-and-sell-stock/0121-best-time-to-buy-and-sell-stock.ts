function maxProfit(prices: number[]): number {   
    let maxProfitValue = 0
    let buyIndex = 0
    
    for (let sellIndex = 1; sellIndex < prices.length; sellIndex++) {
        if (prices[sellIndex] <= prices[buyIndex]) {
            buyIndex = sellIndex
        }
        
        const currentProfit = prices[sellIndex] - prices[buyIndex]
        
        maxProfitValue = Math.max(maxProfitValue, currentProfit)
    }

    return maxProfitValue
};