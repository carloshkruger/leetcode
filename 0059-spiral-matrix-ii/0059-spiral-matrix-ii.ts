function generateMatrix(n: number): number[][] {
    const totalValues = n * n
    let currentValue = 1
    let rightLimit = n - 1
    let bottomLimit = n - 1
    let leftLimit = 0
    let topLimit = 1
    let currentRow = 0
    let currentCol = 0
    const answer = []
    
    for (let i = 0; i < n; i++) {
        answer[i] = []
    }
    
    while (currentValue <= totalValues) {
        for (currentCol; currentCol <= rightLimit; currentCol++) {
            answer[currentRow][currentCol] = currentValue
            currentValue++
        }
        rightLimit--
        currentRow++
        currentCol--
        
        for (currentRow; currentRow <= bottomLimit; currentRow++) {
            answer[currentRow][currentCol] = currentValue
            currentValue++
        }
        bottomLimit--
        currentCol--
        currentRow--

        for (currentCol; currentCol >= leftLimit; currentCol--) {
            answer[currentRow][currentCol] = currentValue
            currentValue++
        }
        leftLimit++
        currentRow--
        currentCol++
        
        for (currentRow; currentRow >= topLimit; currentRow--) {
            answer[currentRow][currentCol] = currentValue
            currentValue++ 
        }
        topLimit++
        currentCol++
        currentRow++
    }
    
    return answer
};