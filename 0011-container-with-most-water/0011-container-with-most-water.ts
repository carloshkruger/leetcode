function maxArea(height: number[]): number {
    let maximum = 0
    let leftIndex = 0
    let rightIndex = height.length - 1
    
    while (leftIndex < rightIndex) {
        const lowestHeight = Math.min(height[leftIndex], height[rightIndex])
        const distance = rightIndex - leftIndex
        const amountOfWater = distance * lowestHeight
        
        maximum = Math.max(maximum, amountOfWater)
        
        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++
        } else {
            rightIndex--
        }
    }
    
    return maximum
};