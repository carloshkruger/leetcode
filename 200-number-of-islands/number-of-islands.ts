function numIslands(grid: string[][]): number {
  let count = 0
  const visited = new Set()

  function dfs(row: number, col: number) {
    const isOutOfBounds = row < 0
      || row >= grid.length
      || col < 0
      || col >= grid[0].length
    if (isOutOfBounds) {
      return false
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return false
    }
    visited.add(cacheKey)

    if (grid[row][col] === '0') {
      return false
    }

    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)

    return true
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (dfs(row, col)) {
        count++
      }
    }
  }

  return count
};