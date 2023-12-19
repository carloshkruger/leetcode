function maxProfit(prices: number[]): number {
  let minValue = Number.POSITIVE_INFINITY
  let maxProfit = 0

  for (const price of prices) {
    minValue = Math.min(minValue, price)
    maxProfit = Math.max(maxProfit, price - minValue)
  }

  return maxProfit
}