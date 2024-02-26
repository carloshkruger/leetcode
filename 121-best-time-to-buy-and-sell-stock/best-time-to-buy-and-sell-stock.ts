function maxProfit(prices: number[]): number {
  let maximumProfit = 0
  let minPrice = Infinity

  for (const price of prices) {
    minPrice = Math.min(minPrice, price)
    maximumProfit = Math.max(maximumProfit, price - minPrice)
  }

  return maximumProfit
};