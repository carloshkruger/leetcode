/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const hashSetRow = new Set()
    const hashSetCol = new Set()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                hashSetRow.add(i)
                hashSetCol.add(j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {       
        for (let j = 0; j < matrix[i].length; j++) {
            if (hashSetRow.has(i) || hashSetCol.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};