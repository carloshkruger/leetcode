function maxArea(height: number[]): number {
  let maxAmount = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const minHeight = Math.min(height[left], height[right])
    const distance = right - left
    const currentAmount = minHeight * distance

    maxAmount = Math.max(maxAmount, currentAmount)

    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return maxAmount
};