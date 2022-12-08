function maxArea(height: number[]): number {
    let maxAmount = 0
    let left = 0
    let right = height.length - 1
    
    while (left < right) {
        const minHeight = Math.min(height[left], height[right])
        const amount = (right - left) * minHeight

        maxAmount = Math.max(maxAmount, amount)
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return maxAmount
};