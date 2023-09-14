function minEatingSpeed(piles: number[], h: number): number {
  let minSpeed = Infinity
  let start = 1
  let end = Math.max(...piles)

  while (start <= end) {
    const value = Math.floor(start + (end - start) / 2)
    let count = 0
    for (const pile of piles) {
      count += Math.ceil(pile / value)
    }

    if (count <= h) {
      minSpeed = Math.min(minSpeed, value)
      end = value - 1
    } else {
      start = value + 1
    }
  }

  return minSpeed
};