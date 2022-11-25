function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) {
        return [1]
    }
    
    let currentRow = [1]
    
    for (let i = 1; i <= rowIndex; i++) {
        let newRow = []
        for (let j = 0; j <= currentRow.length; j++) {
            newRow.push((currentRow[j-1] ?? 0) + (currentRow[j] ?? 0))
        }
        currentRow = newRow
    }
    
    return currentRow
};