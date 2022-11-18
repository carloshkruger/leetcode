function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length) {
        return []
    }
    
    const matrixLength = matrix.length * matrix[0].length
    
    let rightLimit = matrix[0].length - 1
    let leftLimit = 0
    let topLimit = 0
    let bottomLimit = matrix.length - 1
    let count = 1
    let row = 0
    let col = 0
    const answer = []
    let direction = matrix[0].length === 1 ? 'down' : 'right'
    
    while (count <= matrixLength) {
        answer.push(matrix[row][col])
        
        const isInRightTopCorner = col === rightLimit && row === topLimit
        const isInRightBottomCorner = col === rightLimit && row === bottomLimit
        const isInLeftBottomCorner = col === leftLimit && row === bottomLimit
        const isInLeftTopCorner = col === leftLimit && row === (topLimit + 1)
        const isGoingRight = direction === 'right'
        const isGoingLeft = direction === 'left'
        const isGoingUp = direction === 'up'
        const isGoingDown = direction === 'down'
        
        if (isInRightTopCorner && isGoingRight) {
            row++
            direction = 'down'
        } else if (isInRightBottomCorner && isGoingDown) {
            col--            
            direction = 'left'
        } else if (isInLeftBottomCorner && isGoingLeft) {
            row--           
            direction = 'up'
        } else if (isInLeftTopCorner && isGoingUp) {
            col++            
            topLimit++
            rightLimit--
            bottomLimit--
            leftLimit++
            direction = 'right'
        } else if (isGoingRight) {
            col++
        } else if (isGoingLeft) {
            col--
        } else if (isGoingDown) {
            row++
        } else if (isGoingUp) {
            row--
        }
        count++
    }
    
    return answer
};