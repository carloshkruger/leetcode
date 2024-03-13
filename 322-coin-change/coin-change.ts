function coinChange(coins: number[], amount: number): number {
  const table = Array(amount + 1).fill(Infinity)
  table[0] = 0

  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      const nextPosition = coin + i
      if (nextPosition > amount) {
        continue
      }
      const possibleNewValue = table[i] + 1
      table[nextPosition] = Math.min(table[nextPosition], possibleNewValue)
    }
  }

  if (table[amount] === Infinity) {
    return -1
  }
  return table[amount]
};

