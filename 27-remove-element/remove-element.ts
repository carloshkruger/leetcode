function removeElement(nums: number[], val: number): number {
  let index = 0
  let i = 0
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
    i++
  }
  return index
};