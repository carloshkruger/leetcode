function thirdMax(nums: number[]): number {
    const array = [...new Set(nums.sort((a,b) => b-a))]

    return array[2] ?? array[0]
};