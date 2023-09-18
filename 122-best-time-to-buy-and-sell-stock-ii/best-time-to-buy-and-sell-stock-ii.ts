function maxProfit(prices: number[]): number {
  let totalProfit = 0
  let buyPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
    const currentProfit = prices[i] - buyPrice
    if (currentProfit > 0) {
      totalProfit += currentProfit 
    }
    buyPrice = prices[i]
  }

  return totalProfit
};