function longestIncreasingPath(matrix: number[][]): number {
  if (!matrix.length) {
    return 0
  }

  let max = 0
  const visited = new Map<string, number>()

  function dfs(row: number, col: number, prev: number, log = false): number {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= matrix.length
      || col >= matrix[0].length
    if (isOutOfBounds) {
      return 0
    }

    if (matrix[row][col] >= prev) {
      return 0
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return visited.get(cacheKey)
    }

    const result = 1 + Math.max(
      dfs(row + 1, col, matrix[row][col], log),
      dfs(row - 1, col, matrix[row][col], log),
      dfs(row, col + 1, matrix[row][col], log),
      dfs(row, col - 1, matrix[row][col], log)
    )

    visited.set(cacheKey, result)

    return result
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const pathLength = dfs(row, col, Infinity, row === 2 && col === 1)
      max = Math.max(max, pathLength)
    }
  }

  return max
};