function rob(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  function helper(table: number[], startIndex: number, endIndex: number): number[] {
    for (let i = startIndex; i < endIndex; i++) {
      if (i + 2 < endIndex) {
        table[i + 2] = Math.max(table[i + 2], nums[i+2] + table[i])
      }
      if (i + 3 < endIndex) {
        table[i + 3] = Math.max(table[i + 3], nums[i+3] + table[i])
      }
    }
    return table
  }

  return Math.max(
    ...helper([...nums], 0, nums.length - 1),
    ...helper([...nums], 1, nums.length),
  )
};