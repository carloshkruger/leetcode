function maxProduct(nums: number[]): number {
  let highest = nums[0]
  let highestSoFar = highest
  let lowestSoFar = highest

  for (let i = 1; i < nums.length; i++) {
    const candidate1 = nums[i]
    const candidate2 = highestSoFar * nums[i]
    const candidate3 = lowestSoFar * nums[i]

    highestSoFar = Math.max(candidate1, candidate2, candidate3)
    lowestSoFar = Math.min(candidate1, candidate2, candidate3)

    highest = Math.max(highest, highestSoFar)
  }

  return highest
};