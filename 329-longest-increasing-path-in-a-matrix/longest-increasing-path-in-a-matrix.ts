function longestIncreasingPath(matrix: number[][]): number {
  if (!matrix.length) {
    return 0
  }

  let max = 0
  const visited = new Map<string, number>()

  function dfs(row: number, col: number, prev: number): number {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= matrix.length
      || col >= matrix[0].length

    if (isOutOfBounds || matrix[row][col] >= prev) {
      return 0
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return visited.get(cacheKey)
    }

    const result = 1 + Math.max(
      dfs(row + 1, col, matrix[row][col]),
      dfs(row - 1, col, matrix[row][col]),
      dfs(row, col + 1, matrix[row][col]),
      dfs(row, col - 1, matrix[row][col])
    )

    visited.set(cacheKey, result)

    return result
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const pathLength = dfs(row, col, Infinity)
      max = Math.max(max, pathLength)
    }
  }

  return max
};