function isValidSudoku(board: string[][]): boolean {
    const rowSet = new Set()
    const colSet = new Set()
    const boxSet = new Set()

    for (let row = 0; row < board.length; row++) {
        const subboxRowIndex = Math.floor(row / 3)

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

            const subboxColIndex = Math.floor(col / 3)
            const subboxKey = `${subboxRowIndex}-${subboxColIndex}-${board[row][col]}`
            if (boxSet.has(subboxKey)){
                return false
            }
            boxSet.add(subboxKey)
        }
    }

    return true
};