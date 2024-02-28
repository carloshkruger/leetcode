function isValidSudoku(board: string[][]): boolean {
  const rowSet = new Set()
  const colSet = new Set()
  const subBoxSet = new Set()

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === '.') {
        continue
      }

      const rowKey = `${row}-${board[row][col]}`
      if (rowSet.has(rowKey)) {
        return false
      }
      rowSet.add(rowKey)

      const colKey = `${col}-${board[row][col]}`
      if (colSet.has(colKey)) {
        return false
      }
      colSet.add(colKey)

      const subBoxRow = Math.floor(row / 3)
      const subBoxCol = Math.floor(col / 3)
      const subBoxKey = `${subBoxRow}-${subBoxCol}-${board[row][col]}`
      if (subBoxSet.has(subBoxKey)) {
        return false
      }
      subBoxSet.add(subBoxKey)
    }
  }

  return true
};