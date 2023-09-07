function search(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1
  
  while (start <= end) {
    const middleIndex = Math.floor(start + (end - start) / 2)
    const middleValue = nums[middleIndex]

    if (middleValue === target) {
      return middleIndex
    }

    if (nums[start] <= middleValue) {
      if (target >= nums[start] && target < middleValue) {
        end = middleIndex - 1
      } else {
        start = middleIndex + 1
      }
    } else {
      if (target > middleValue && target <= nums[end]) {
        start = middleIndex + 1
      } else {
        end = middleIndex - 1
      }
    }
  }
  
  return -1
};