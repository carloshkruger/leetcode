function exist(board: string[][], word: string): boolean {
  const visited = new Set()

  function helper(row: number, col: number, wordIndex: number): boolean {
    const visitedCacheKey = `${row}-${col}`

    if (board[row]?.[col] === undefined) {
      return false
    }
    if (visited.has(visitedCacheKey)) {
      return false
    }
    if (board[row][col] !== word[wordIndex]) {
      return false
    }
    if (wordIndex === word.length - 1) {
      return true
    }

    visited.add(visitedCacheKey)

    const hasFound = helper(row + 1, col, wordIndex + 1)
      || helper(row - 1, col, wordIndex + 1)
      || helper(row, col + 1, wordIndex + 1)
      || helper(row, col - 1, wordIndex + 1)

    visited.delete(visitedCacheKey)

    return hasFound
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (helper(i, j, 0)) {
        return true
      }
    }
  }

  return false
};