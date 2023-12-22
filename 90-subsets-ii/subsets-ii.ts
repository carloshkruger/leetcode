function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)

    const result = [[]]
    let start = 0
    let end = 0

    for (let i = 0; i < nums.length; i++) {
        end = result.length
        for (let j = start; j < end; j++) {
            result.push([...result[j], nums[i]])
        }
        if (nums[i] === nums[i + 1]) {
            start = end
        } else {
            start = 0
        }
    }

    return result
};