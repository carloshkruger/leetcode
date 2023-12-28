function maxArea(height: number[]): number {
  let maximumAmount = 0
  let leftIndex = 0
  let rightIndex = height.length - 1

  while (leftIndex < rightIndex) {
    const minHeight = Math.min(height[leftIndex], height[rightIndex])
    const distance = rightIndex - leftIndex
    const currentAmount = minHeight * distance

    maximumAmount = Math.max(maximumAmount, currentAmount)

    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--
    } else {
      leftIndex++
    }
  }

  return maximumAmount
};