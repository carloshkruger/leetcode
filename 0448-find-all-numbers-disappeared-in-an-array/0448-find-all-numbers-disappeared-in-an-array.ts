function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        const value = Math.abs(nums[i]) - 1
        if (nums[value] > 0) {
            nums[value] *= -1
        }
    }
    
    const answer = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            answer.push(i+1)
        }
    }
    
    return answer
};