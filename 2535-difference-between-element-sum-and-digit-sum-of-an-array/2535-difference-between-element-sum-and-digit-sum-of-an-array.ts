function differenceOfSum(nums: number[]): number {
    let elementSum = 0
    let digitSum = 0
    
    for (const num of nums) {
        elementSum += num
        
        let currentValue = num
        
        while (currentValue > 0) {
            const digit = currentValue % 10
            digitSum += digit
            currentValue = Math.floor(currentValue / 10)
        }
    }
    
    return elementSum - digitSum
};