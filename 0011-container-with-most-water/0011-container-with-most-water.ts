function maxArea(height: number[]): number {
    let maxAmount = 0
    let start = 0
    let end = height.length - 1
    
    while (start < end) {
        const minHeight = Math.min(height[start], height[end])
        const amount = (end - start) * minHeight
        
        maxAmount = Math.max(maxAmount, amount)
        
        if (height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    
    return maxAmount
};