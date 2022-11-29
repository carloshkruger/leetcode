function transpose(matrix: number[][]): number[][] {
    const answer = []
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (answer[j]) {
                answer[j].push(matrix[i][j])
            } else {
                answer[j] = [matrix[i][j]]
            }
        }
    }
    
    return answer
};