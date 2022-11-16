function findDisappearedNumbers(nums: number[]): number[] {
    nums.sort((a,b) => a-b)
    
    const maxNumber = nums.length
    const answer = []

    let pointer = 0
    let previous = nums[0]
    
    for (let i = 1; i <= maxNumber; i++) {
        if (i !== nums[pointer]) {
            answer.push(i)
        } else {
            if (nums[pointer] === nums[pointer + 1]) {
                while (nums[pointer] === nums[pointer + 1]) {
                    pointer++
                }
            }
            pointer++
        }
    }
    
    return answer
};