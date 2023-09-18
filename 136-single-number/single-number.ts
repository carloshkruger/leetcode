function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i-1] !== nums[i] && nums[i+1] !== nums[i]) {
      return nums[i]
    }
  }

  return -1
};