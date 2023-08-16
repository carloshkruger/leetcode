function permute(nums: number[]): number[][] {
    const answer = []

    function backtrack(current: number[]) {
        if (current.length === nums.length) {
            answer.push([...current])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (!current.includes(nums[i])) {
                backtrack([...current, nums[i]])
            }
        }
    }

    backtrack([])

    return answer
};