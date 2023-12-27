function subsets(nums: number[]): number[][] {
    const answer = [[]]

    for (const num of nums) {
        const length = answer.length
        for (let i = 0; i < length; i++) {
            answer.push([...answer[i], num])
        }
    }

    return answer
};