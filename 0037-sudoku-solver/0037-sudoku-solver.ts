const BOARD_LENGTH = 9;
const MIN_VALID_NUMBER = 1;
const MAX_VALID_NUMBER = 9;
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

// function getPossibleValues(board: string[][], row: number, col: number): number[] {
//     let possibleValues = new Set(VALID_VALUES);
    
//     for (let rowIndex = 0; rowIndex < BOARD_LENGTH; rowIndex++) {
        
//     }
    
// }

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
    
//     for (let i = 0; i < BOARD_LENGTH; i++) {
//         if (!isValidRow(board, i)) {
//             return false
//         }
//     }
    
//     for (let i = 0; i < BOARD_LENGTH; i++) {
//         if (!isValidCol(board, i)) {
//             return false
//         }
//     }
    
//     const START_SUB_BOXES_INDEX = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]]
    
//     for (let i = 0; i < START_SUB_BOXES_INDEX.length; i++) {
//         if (!isValidSubBox(board, START_SUB_BOXES_INDEX[i][0], START_SUB_BOXES_INDEX[i][1])) {
//             return false
//         }
//     }
        
//     return true
}

function isValidRow(board: string[][], row: number): boolean {
    const map = {}
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (map[board[row][i]]) {
            return false
        }
        map[board[row][i]] = true
    }
    return true
}

function isValidCol(board: string[][], col: number): boolean {
    const map = {}
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (map[board[i][col]]) {
            return false
        }
        map[board[i][col]] = true
    }
    return true
}

function isValidSubBox(board: string[][], startSubBoxRow: number, startSubBoxCol: number): boolean {
    const SUB_BOX_LENGTH = 3

    const endSubBoxRow = startSubBoxRow + SUB_BOX_LENGTH
    const endSubBoxCol = startSubBoxCol + SUB_BOX_LENGTH
    
    const map = {}

    for (let rowIndex = startSubBoxRow; rowIndex < endSubBoxRow; rowIndex++) {
        for (let colIndex = startSubBoxCol; colIndex < endSubBoxCol; colIndex++) {
            if (map[board[rowIndex][colIndex]]) {
                return false
            }
            map[board[rowIndex][colIndex]] = true   
        }
    }

    return true
}