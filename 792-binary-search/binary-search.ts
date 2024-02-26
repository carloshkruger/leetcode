function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2)
    const value = nums[middleIndex]

    if (value === target) {
      return middleIndex
    }
    if (value > target) {
      right = middleIndex - 1
    } else {
      left = middleIndex + 1
    }
  }

  return -1
};