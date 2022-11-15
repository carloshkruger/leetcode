function heightChecker(heights: number[]): number {
    const orderedArray = [...heights].sort((a,b) => a-b)
    let count = 0
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== orderedArray[i]) {
            count++
        }
    }
    
    return count
};