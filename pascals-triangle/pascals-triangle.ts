function generate(numRows: number): number[][] {
    const answer = [[1]]
    
    if (numRows === 1) {
        return answer
    }
    
    let currentRow = 2 
    while (currentRow <= numRows) {
        const row = [1]
        
        for (let i = 2; i < currentRow; i++) {
            row.push(answer[currentRow-2][i-2] + answer[currentRow-2][i-1])
        }
        
        row.push(1)
        answer.push(row)
        currentRow++
    }
    
    return answer
};