/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const visited = new Set()

  function dfs(row: number, col: number): void {
    const isOutOfBounds = row < 0
      || col < 0
      || row >= board.length
      || col >= board[0].length
    if (isOutOfBounds) {
      return
    }
    if (board[row][col] === 'X') {
      return
    }
    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return
    }
    visited.add(cacheKey)

    board[row][col] = 'T'

    dfs(row+1, col)
    dfs(row-1, col)
    dfs(row, col+1)
    dfs(row, col-1)
  }

  const rows = board.length - 1
  const cols = board[0].length - 1

  // upper border
  for (let col = 0; col <= cols; col++) {
    if (board[0][col] === 'O') {
      dfs(0, col)
    }
  }
  // bottom border
  for (let col = 0; col <= cols; col++) {
    if (board[rows][col] === 'O') {
      dfs(rows, col)
    }
  }
  // left border
  for (let row = 0; row <= rows; row++) {
    if (board[row][0] === 'O') {
      dfs(row, 0)
    }
  }
  // right border
  for (let row = 0; row < rows; row++) {
    if (board[row][cols] === 'O') {
      dfs(row, cols)
    }
  }

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X'
      } else if (board[row][col] === 'T') {
        board[row][col] = 'O'
      }
    }
  }
};