function numIslands(grid: string[][]): number {
  const visited = new Set<string>()
  let islandCount = 0

  function dfs(row: number, col: number): boolean {
    const isOutOfBounds = row < 0
      || row >= grid.length
      || col < 0
      || col >= grid[0].length

    if (isOutOfBounds) {
      return false
    }

    const isWater = grid[row][col] === '0'
    if (isWater) {
      return false
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return false
    }
    visited.add(cacheKey)

    dfs(row+1, col)
    dfs(row-1, col)
    dfs(row, col+1)
    dfs(row, col-1)

    return true
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (dfs(i, j)) {
        islandCount++
      }
    }
  }

  return islandCount
}