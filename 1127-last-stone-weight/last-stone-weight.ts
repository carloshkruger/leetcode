function lastStoneWeight(stones: number[]): number {
  const sortStones = () => stones.sort((a, b) => a - b)

  sortStones()

  while (stones.length > 1) {
    const stone1 = stones.pop()
    const stone2 = stones.pop()
    const newWeight = stone1 - stone2

    if (newWeight > 0) {
      stones.push(newWeight)
      sortStones()
    }
  }

  return stones.pop() ?? 0
};