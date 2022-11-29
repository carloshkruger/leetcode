function transpose(matrix: number[][]): number[][] {
    const answer = []
    
    for (let i = 0; i < matrix[0].length; i++) {
        answer.push([matrix[0][i]])
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            answer[j].push(matrix[i][j])
        }
    }
    
    return answer
};