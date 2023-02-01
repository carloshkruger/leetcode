function exist(board: string[][], word: string): boolean {
    const hashSet = new Set()

    function bfs(row: number, col: number, wordIndex: number): boolean {
        if (wordIndex === word.length) {
            return true
        }        
        
        const key = `${row}-${col}`

        if (
            board[row]?.[col] === undefined
            || hashSet.has(key)
            || board[row][col] !== word[wordIndex]
        ) {
            return false
        }        
        
        hashSet.add(key)
    
        const result = bfs(row + 1, col, wordIndex + 1)
         || bfs(row - 1, col, wordIndex + 1)
         || bfs(row, col + 1, wordIndex + 1)
         || bfs(row, col - 1, wordIndex + 1)
        
        hashSet.delete(key)
        
        return result
    }
    
    const ROW_LENGTH = board.length
    const COL_LENGTH = board[0].length
    
    for (let row = 0; row < ROW_LENGTH; row++) {
        for (let col = 0; col < COL_LENGTH; col++) {
            if (bfs(row, col, 0)) {
                return true
            }
        }
    }

    return false
};