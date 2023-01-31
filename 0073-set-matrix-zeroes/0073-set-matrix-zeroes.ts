/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const hashSet = new Set()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                hashSet.add(`${i}-${j}`)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (hashSet.has(`${i}-${j}`)) {
                // right
                for (let k = j+1; k < matrix[i].length; k++) {
                    matrix[i][k] = 0
                }
                // left
                for (let k = j-1; k >= 0; k--) {
                    matrix[i][k] = 0
                }
                // down
                for (let k = i+1; k < matrix.length; k++) {
                    matrix[k][j] = 0
                }
                // up
                for (let k = i-1; k >= 0; k--) {
                    matrix[k][j] = 0
                }
            }
        }
    }
};