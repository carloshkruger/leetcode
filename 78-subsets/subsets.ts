function subsets(nums: number[]): number[][] {
  const result = [[]]

  for (const num of nums) {
    const resultLength = result.length
    for (let i = 0; i < resultLength; i++) {
      result.push([...result[i], num])
    }
  }

  return result
};