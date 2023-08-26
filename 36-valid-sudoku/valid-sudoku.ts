function isValidSudoku(board: string[][]): boolean {
  const hashColumns = new Set()
  const hashSubBoxes = new Set()

  for (let i = 0; i < board.length; i++) {
    const hashRow = new Set()
    const subBoxRow = Math.floor(i / 3)

    for (let j = 0; j < board[i].length; j++) {
      const currentValue = board[i][j]
      if (currentValue === '.') {
        continue
      }

      if (hashRow.has(`${i}-${currentValue}`)) {
        return false
      }
      hashRow.add(`${i}-${currentValue}`)

      if (hashColumns.has(`${j}-${currentValue}`)) {
        return false
      }
      hashColumns.add(`${j}-${currentValue}`)

      const subBoxCol = Math.floor(j / 3)
      const subBoxKey = `${subBoxRow}-${subBoxCol}-${currentValue}`
      if (hashSubBoxes.has(subBoxKey)) {
        return false
      }
      hashSubBoxes.add(subBoxKey)
    }
  }

  return true
};