function missingNumber(nums: number[]): number {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i]
    if (nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i
    }
  }

  return nums.length
};