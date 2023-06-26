function searchMatrix(matrix: number[][], target: number): boolean {
    let leftIndex = 0
    let rightIndex = matrix.length - 1
    
    while (leftIndex <= rightIndex) {
        const middle = Math.floor((leftIndex + rightIndex) / 2)
        const rowList = matrix[middle]
                
        if (rowList[0] === target || rowList.at(-1) === target) {
            return true
        }
        if (rowList[0] < target && rowList.at(-1) > target) {
            let rowLeftIndex = 1
            let rowRightIndex = rowList.length - 2
            
            while (rowLeftIndex <= rowRightIndex) {
                const middle = Math.floor((rowLeftIndex + rowRightIndex) / 2)
                const value = rowList[middle]
                if (value === target) {
                    return true
                }
                if (value > target) {
                    rowRightIndex--
                } else {
                    rowLeftIndex++
                }
            }
            
            return false
        }
        
        if (rowList[0] > target) {
            rightIndex--
        } else {
            leftIndex++
        }
    }
    
    return false
};