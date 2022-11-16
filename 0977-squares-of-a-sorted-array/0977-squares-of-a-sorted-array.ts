function sortedSquares(nums: number[]): number[] {
    const answer = []
    let answerIndex = nums.length - 1
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        const startSquare = nums[start] * nums[start]
        const endSquare = nums[end] * nums[end]
        
        if (startSquare > endSquare) {
            answer[answerIndex--] = startSquare
            start++
        } else {
            answer[answerIndex--] = endSquare
            end--
        }
    }
    
    return answer
};