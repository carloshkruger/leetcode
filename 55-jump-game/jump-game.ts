function canJump(nums: number[]): boolean {
  const list = Array(nums.length).fill(false)
  list[list.length-1] = true

  for (let i = nums.length-2; i >= 0; i--) {
    let currentValue = Math.min(nums[i], nums.length-i)
    for (let j = currentValue; j >= 1; j--) {
      if (list[j+i]) {
        list[i] = true
        break
      }
    }
  }

  return list[0]
};