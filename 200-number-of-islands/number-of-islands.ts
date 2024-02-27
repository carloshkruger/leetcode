function numIslands(grid: string[][]): number {
  const visited = new Set()

  function bfs(row: number, col: number): boolean {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
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

    bfs(row + 1, col)
    bfs(row - 1, col)
    bfs(row, col + 1)
    bfs(row, col - 1)

    return true
  }

  let count = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (bfs(row, col)) {
        count++
      }
    }
  }

  return count
};