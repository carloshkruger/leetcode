function permute(nums: number[]): number[][] {
    const permutations = []
    const prev = [[]]

    for (const num of nums) {
        const length = prev.length

        for (let i = 0; i < length; i++) {
            const old = prev.shift()

            for (let j = 0; j < old.length + 1; j++) {
                const newPermutation = [...old]
                newPermutation.splice(j, 0, num)

                if (newPermutation.length === nums.length) {
                    permutations.push(newPermutation)
                } else {
                    prev.push(newPermutation)
                }
            }
        }
    }

    return permutations
};