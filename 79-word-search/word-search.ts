function exist(board: string[][], word: string): boolean {
  const visited = new Set()

  function dfs(row: number, col: number, index: number): boolean {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= board.length
      || col >= board[0].length
    if (isOutOfBounds) {
      return false
    }
    const key = `${row},${col}`
    if (visited.has(key)) {
      return false
    }
    if (board[row][col] !== word[index]) {
      return false
    }
    if (index === word.length - 1) {
      return true
    }
    
    visited.add(key)

    const found = dfs(row - 1, col, index + 1)
      || dfs(row + 1, col, index + 1)
      || dfs(row, col + 1, index + 1)
      || dfs(row, col - 1, index + 1)

    visited.delete(key)

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