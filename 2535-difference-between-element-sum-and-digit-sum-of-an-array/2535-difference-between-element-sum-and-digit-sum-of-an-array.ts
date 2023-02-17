function differenceOfSum(nums: number[]): number {
    let elementSum = 0
    let digitSum = 0
    
    for (const num of nums) {
        elementSum += num
        digitSum += num.toString().split('').map(Number).reduce((a,b) => a+b, 0)
    }
    
    return elementSum - digitSum
};