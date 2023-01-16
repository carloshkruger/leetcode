/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const length = matrix[0].length - 1

    for (let i = 0; i < length / 2; i++) {
        for (let j = i; j < length - i; j++) {
            const topLeft = matrix[i][j]
            const topRight = matrix[j][length - i]
            const bottomRight = matrix[length - i][length-j]
            const bottomLeft = matrix[length-j][i]
            
            matrix[j][length - i] = topLeft
            matrix[length - i][length-j] = topRight
            matrix[length-j][i] = bottomRight
            matrix[i][j] = bottomLeft
        }
    }
};