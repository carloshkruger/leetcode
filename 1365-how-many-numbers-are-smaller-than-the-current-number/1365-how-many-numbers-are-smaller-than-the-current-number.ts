function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortedNums = [...nums].sort((a, b) => a - b)
    
    const answer = []
    
    for (let i = 0; i < nums.length; i++) {
        let j = 0
        while (sortedNums[j] < nums[i]) {
            j++
        }
        answer.push(j)
    }
    
    return answer
};