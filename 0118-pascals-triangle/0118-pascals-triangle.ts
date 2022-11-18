function generate(numRows: number): number[][] {
    const answer = [[1]]
    
    if (numRows === 1) {
        return answer
    }
    
    let currentRow = 2 
    while (currentRow <= numRows) {
        const row = []
        
        for (let i = 0; i < currentRow; i++) {
            row.push((answer[currentRow-2][i-1] ?? 0) + (answer[currentRow-2][i] ?? 0))
        }
        
        answer.push(row)
        currentRow++
    }
    
    return answer
};