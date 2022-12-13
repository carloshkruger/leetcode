function shuffle(nums: number[], n: number): number[] {
    const answer = []
    
    let j = n
    for (let i = 0; i < n; i++) {
        answer.push(nums[i])
        answer.push(nums[j])
        j++
    }
    
    return answer
};