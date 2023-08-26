function isValidSudoku(board: string[][]): boolean {
  const hashColumns = new Map()
  const hashSubBoxes = new Map()

  for (let i = 0; i < board.length; i++) {
    const hashRow = new Map()
    hashRow.set(i, new Set())
    const subBoxRow = Math.floor(i / 3)

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        continue
      }

      const rowList = hashRow.get(i)
      if (rowList.has(board[i][j])) {
        return false
      }
      rowList.add(board[i][j])
      hashRow.set(i, rowList)

      const columnList = hashColumns.get(j) ?? new Set()
      if (columnList.has(board[i][j])) {
        return false
      }
      columnList.add(board[i][j])
      hashColumns.set(j, columnList)

      const subBoxCol = Math.floor(j / 3)
      const subBoxList = hashSubBoxes.get(`${subBoxRow}-${subBoxCol}`) ?? new Set()
      if (subBoxList.has(board[i][j])) {
        return false
      }
      subBoxList.add(board[i][j])
      hashSubBoxes.set(`${subBoxRow}-${subBoxCol}`, subBoxList)
    }
  }

  return true
};