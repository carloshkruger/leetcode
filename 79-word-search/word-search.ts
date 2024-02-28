function exist(board: string[][], word: string): boolean {
  function dfs(row: number, col: number, visited: Set<string>, index: number): boolean {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
      return false
    }

    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return false
    }

    if (board[row][col] !== word[index]) {
      return false
    }

    if (index === word.length - 1) {
      return true
    }

    visited.add(cacheKey)

    const result = dfs(row + 1, col, visited, index + 1)
      || dfs(row - 1, col, visited, index + 1)
      || dfs(row, col + 1, visited, index + 1)
      || dfs(row, col - 1, visited, index + 1)

    visited.delete(cacheKey)

    return result
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, new Set(), 0)) {
        return true
      }
    }
  }

  return false
};