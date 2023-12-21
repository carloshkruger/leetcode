function findDisappearedNumbers(nums: number[]): number[] {
    let i = 0
    while (i < nums.length) {
        const j = nums[i] - 1
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    const answer = []

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            answer.push(i+1)
        }
    }

    return answer
};