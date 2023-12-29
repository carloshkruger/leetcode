/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let leftIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[leftIndex] = nums[i]
      leftIndex++
    }
  }

  while (leftIndex < nums.length) {
    nums[leftIndex] = 0
    leftIndex++
  }
};