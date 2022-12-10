const BOARD_LENGTH = 9;
const EMPTY_CELL_VALUE = '.';
const VALID_VALUES = ['1','2','3','4','5','6','7','8','9']

function solveSudoku(board: string[][]): void {
    solve(board)
};

function solve(board: string[][]): boolean {
    for (let i = 0; i < BOARD_LENGTH; i++) {
        for (let j = 0; j < BOARD_LENGTH; j++) {
            if (board[i][j] === EMPTY_CELL_VALUE) {
                for (const possibleValue of VALID_VALUES) {
                    if (isValidChoice(board, i, j, possibleValue)) {
                        board[i][j] = possibleValue

                        if (solve(board)) {
                            return true
                        } else {
                            board[i][j] = EMPTY_CELL_VALUE
                        }   
                    }
                }
                
                return false
            }
        }
    }
    
    return true
}

function isValidChoice(board: string[][], row: number, col: number, value: string): boolean {
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (board[i][col] !== EMPTY_CELL_VALUE && board[i][col] === value) {
            return false
        }
        if (board[row][i] !== EMPTY_CELL_VALUE && board[row][i] === value) {
            return false
        }
    }
    
    const startSubBoxRow = Math.floor(row / 3) * 3
    const startSubBoxCol = Math.floor(col / 3) * 3
    
    const endSubBoxRow = startSubBoxRow + 3
    const endSubBoxCol = startSubBoxCol + 3
    
    for (let rowIndex = startSubBoxRow; rowIndex < endSubBoxRow; rowIndex++) {
        for (let colIndex = startSubBoxCol; colIndex < endSubBoxCol; colIndex++) {
            if (board[rowIndex][colIndex] !== EMPTY_CELL_VALUE && board[rowIndex][colIndex] === value) {
                return false
            }
        }
    }
    
    return true
}
