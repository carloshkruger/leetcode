function differenceOfSum(nums: number[]): number {
    let elementSum = 0
    let digitSum = 0
    
    for (const num of nums) {
        elementSum += num
        digitSum += num.toString().split('').reduce((a,b) => a + Number(b), 0)
    }
    
    return elementSum - digitSum
};