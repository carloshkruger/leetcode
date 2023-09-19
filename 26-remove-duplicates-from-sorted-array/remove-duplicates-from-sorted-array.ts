function removeDuplicates(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  let slowPointer = 1
  let currentValue = nums[0]
  
  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== currentValue) {
      currentValue = nums[fastPointer]
      nums[slowPointer] = nums[fastPointer]
      slowPointer++
    }
  }

  return slowPointer
};