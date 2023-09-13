function solveNQueens(n: number): string[][] {
  const board = Array(n).fill(0).map(() => Array(n).fill('.'))
  const solutions = []

  function isValid(board: string[][]): boolean {
    const rowSet = new Set()
    const colSet = new Set()
    const diagonal1Set = new Set()
    const diagonal2Set = new Set()

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === '.') {
          continue
        }
        if (rowSet.has(i)) {
          return false
        }
        rowSet.add(i)
        if (colSet.has(j)) {
          return false
        }
        colSet.add(j)
        const diag1 = i + j
        if (diagonal1Set.has(diag1)) {
          return false
        }
        diagonal1Set.add(diag1)
        const diag2 = i - j
        if (diagonal2Set.has(diag2)) {
          return false
        }
        diagonal2Set.add(diag2)
      }
    }

    return true
  }

  function backtrack(board: string[][], row: number, col: number, qCount: number): boolean {
    if (!isValid(board)) {
      return false
    }
  
    if (qCount === n) {
      const validBoard = []
      for (const row of board) {
        validBoard.push(row.join(''))
      }
      solutions.push(validBoard)
      return true
    }

    for (let i = row; i < board.length; i++) {
      let found = false
      for (let j = col; j < board[0].length; j++) {
        if (board[i][j] === '.') {
          board[i][j] = 'Q'
          if (backtrack(board, row + 1, col, qCount+1)) {
            found = true
          }
          board[i][j] = '.'
        }
      }
      if (!found) {
        return false
      }
    }
  
    return false
  }

  backtrack(board, 0, 0, 0)

  return solutions
};