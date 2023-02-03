function searchMatrix(matrix: number[][], target: number): boolean {
    const COLUMN_LENGTH = matrix[0].length
    let start = 0
    let end = matrix.length * COLUMN_LENGTH
    
    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        const row = Math.floor(middle / COLUMN_LENGTH)
        const col = middle % COLUMN_LENGTH
        
        if (matrix[row]?.[col] === target) {
            return true
        }
        if (matrix[row]?.[col] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    
    return false
};