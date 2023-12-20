function search(nums: number[], target: number): number {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const middleIndex = Math.floor((start + end) / 2)
        const middleValue = nums[middleIndex]

        if (middleValue === target) {
            return middleIndex
        }
        if (middleValue > target) {
            end = middleIndex - 1
        } else {
            start = middleIndex + 1
        }
    }

    return -1
};