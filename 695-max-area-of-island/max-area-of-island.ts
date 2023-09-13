function maxAreaOfIsland(grid: number[][]): number {
  const visited = new Set()
  let maxArea = 0

  function calcIslandArea(row: number, col: number): number {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= grid.length
      || col >= grid[0].length
    if (isOutOfBounds) {
      return 0
    }

    if (grid[row][col] === 0) {
      return 0
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return 0
    }
    visited.add(cacheKey)

    return 1
      + calcIslandArea(row+1, col)
      + calcIslandArea(row-1, col)
      + calcIslandArea(row, col+1)
      + calcIslandArea(row, col-1)
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const islandArea = calcIslandArea(row, col)
      maxArea = Math.max(maxArea, islandArea)
    }
  }

  return maxArea
};