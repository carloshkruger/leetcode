function jump(nums: number[]): number {
  const list = Array(nums.length).fill(Infinity)
  list[list.length-1] = 0

  for (let i = list.length-2; i >= 0; i--) {
    const currentValue = Math.min(nums[i], list.length-1-i)
    for (let j = currentValue; j >= 1; j--) {
      if (list[j+i] !== Infinity) {
        list[i] = Math.min(list[i], 1+list[j+i])
        if (list[i] === 1) {
          break
        }
      }
    }
  }

  return list[0]
};