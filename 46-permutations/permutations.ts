function permute(nums: number[]): number[][] {
    const permutations = []

    function backtrack(current: number[]) {
        if (current.length === nums.length) {
            permutations.push(current)
            return
        }

        for (const num of nums) {
            if (!current.includes(num)) {
                backtrack([...current, num])
            }
        }
    }

    backtrack([])

    return permutations
};