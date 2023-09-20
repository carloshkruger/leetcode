function numIslands(grid: string[][]): number {
  const visited = new Set()

  function isIsland(row: number, col: number): boolean {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= grid.length
      || col >= grid[0].length
    if (isOutOfBounds) {
      return false
    }

    if (grid[row][col] === '0') {
      return false
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return false
    }
    visited.add(cacheKey)

    isIsland(row+1, col)
    isIsland(row-1, col)
    isIsland(row, col+1)
    isIsland(row, col-1)

    return true
  }

  let islandCount = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (isIsland(row, col)) {
        islandCount++
      }
    }
  }

  return islandCount
};