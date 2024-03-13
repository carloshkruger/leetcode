function rob(nums: number[]): number {
  if (nums.length === 0){
    return 0
  }
  if (nums.length === 1){
    return nums[0]
  }
  const table = [...nums]
  table[0] = nums[0]
  table[1] = Math.max(nums[0], nums[1])

  for (let i = 0; i < nums.length; i++) {
    if (i + 2 < nums.length) {
      table[i + 2] = Math.max(table[i + 2], nums[i+2] + table[i])
    }
    if (i + 3 < nums.length) {
      table[i + 3] = Math.max(table[i + 3], nums[i+3] + table[i])
    }
  }

  return Math.max(...table)
};