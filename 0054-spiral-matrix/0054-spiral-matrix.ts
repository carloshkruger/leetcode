function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length) {
        return []
    }
    
    const matrixLength = matrix.length * matrix[0].length
    
    let rightLimit = matrix[0].length - 1
    let leftLimit = 0
    let topLimit = 0
    let bottomLimit = matrix.length - 1
    const answer = []
    
    while (answer.length < matrixLength) {
        for (let i = leftLimit; i <= rightLimit && answer.length < matrixLength; i++) {
            answer.push(matrix[topLimit][i])
        }
        topLimit++
        
        for (let i = topLimit; i <= bottomLimit && answer.length < matrixLength; i++) {
            answer.push(matrix[i][rightLimit])
        }
        rightLimit--
        
        for (let i = rightLimit; i >= leftLimit && answer.length < matrixLength; i--) {
            answer.push(matrix[bottomLimit][i])
        }
        bottomLimit--
        
        for (let i = bottomLimit; i >= topLimit && answer.length < matrixLength; i--) {
            answer.push(matrix[i][leftLimit])
        }
        leftLimit++
    }
    
    return answer
};