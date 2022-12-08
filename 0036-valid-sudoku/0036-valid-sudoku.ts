const BOARD_LENGTH = 9
const EMPTY_CELL_VALUE = '.'

function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (!isValidRow(board, i)) {
            return false
        }
    }
    
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (!isValidCol(board, i)) {
            return false
        }
    }
    
    const START_SUB_BOXES_INDEX = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]]
    
    for (let i = 0; i < START_SUB_BOXES_INDEX.length; i++) {
        if (!isValidSubBox(board, START_SUB_BOXES_INDEX[i][0], START_SUB_BOXES_INDEX[i][1])) {
            return false
        }
    }
    
    return true
}

function isValidRow(board: string[][], row: number): boolean {
    const map = {}
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (board[row][i] !== EMPTY_CELL_VALUE && map[board[row][i]]) {
            return false
        }
        map[board[row][i]] = true
    }
    return true
}

function isValidCol(board: string[][], col: number): boolean {
    const map = {}
    for (let i = 0; i < BOARD_LENGTH; i++) {
        if (board[i][col] !== EMPTY_CELL_VALUE && map[board[i][col]]) {
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
            if (board[rowIndex][colIndex] !== EMPTY_CELL_VALUE && map[board[rowIndex][colIndex]]) {
                return false
            }
            map[board[rowIndex][colIndex]] = true   
        }
    }
    return true
}