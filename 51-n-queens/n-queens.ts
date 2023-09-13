function solveNQueens(n: number): string[][] {
  const board = Array(n).fill(0).map(() => Array(n).fill('.'))
  const solutions = []

  function isValidPosition(row: number, col: number): boolean {
    // validate column
    for (let i = 0; i < n; i++) {
      if (i !== row && board[i][col] === 'Q') {
        return false
      }
    }

    //validate row
    for (let i = 0; i < n; i++) {
      if (i !== col && board[row][i] === 'Q') {
        return false
      }
    }

    // validate diagonals
    for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    for (let i = row+1, j = col+1; i < n && j < n; i++, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    for (let i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    for (let i = row+1, j = col-1; i < n && j >= 0; i++, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    return true
  }

  function backtrack(row: number): void {
    if (row === n) {
      const validBoard = []
      for (const row of board) {
        validBoard.push(row.join(''))
      }
      solutions.push(validBoard)

      return
    }

    for (let col = 0; col < n; col++) {
      if (isValidPosition(row, col)) {
        board[row][col] = 'Q'
        backtrack(row + 1)
        board[row][col] = '.'
      }
    }
  }

  backtrack(0)

  return solutions
};