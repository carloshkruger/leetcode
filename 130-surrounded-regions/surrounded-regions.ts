/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const cache = new Set()

  function bfs(row: number, col: number): void {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
      return
    }
    if (board[row][col] !== 'O') {
      return
    }
    const cacheKey = `${row},${col}`
    if (cache.has(cacheKey)) {
      return
    }
    cache.add(cacheKey)

    board[row][col] = 'T'

    bfs(row + 1, col)
    bfs(row - 1, col)
    bfs(row, col + 1)
    bfs(row, col - 1)
  }

  for (let col = 0; col < board[0].length; col++) {
    bfs(0, col)
    bfs(board.length - 1, col)
  }

  for (let row = 0; row < board.length; row++) {
    bfs(row, 0)
    bfs(row, board[0].length - 1)
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X'
      } else if (board[row][col] === 'T') {
        board[row][col] = 'O'
      }
    }
  }
};
