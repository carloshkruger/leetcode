function numIslands(grid: string[][]): number {
  const visited = new Set<string>()
  let islandCount = 0

  function dfs(row: number, col: number): boolean {
    const value = grid[row]?.[col]
    const cacheKey = `${row},${col}`
    const isOutOfBounds = value === undefined
    const isWater = value === '0'

    if (isOutOfBounds || visited.has(cacheKey) || isWater) {
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