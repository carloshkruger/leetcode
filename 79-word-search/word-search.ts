function exist(board: string[][], word: string): boolean {
  const visited = new Set()

  function dfs(row: number, col: number, wordIndex: number): boolean {
    const value = board[row]?.[col]
    const cacheKey = `${row},${col}`
    const isOutOfBounds = value === undefined
  
    if (isOutOfBounds || visited.has(cacheKey) || value !== word[wordIndex]) {
      return false
    }

    visited.add(cacheKey)

    if (wordIndex === word.length - 1) {
      return true
    }

    const found = dfs(row + 1, col, wordIndex + 1)
      || dfs(row - 1, col, wordIndex + 1)
      || dfs(row, col + 1, wordIndex + 1)
      || dfs(row, col - 1, wordIndex + 1)

    visited.delete(cacheKey)

    return found
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (dfs(row, col, 0)) {
        return true
      }
    }
  }

  return false
};