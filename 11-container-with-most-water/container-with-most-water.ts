function maxArea(height: number[]): number {
  let maximumAmountOfWater = 0
  let leftIndex = 0
  let rightIndex = height.length - 1

  while (leftIndex < rightIndex) {
    const minimumHeight = Math.min(height[leftIndex], height[rightIndex])
    const currentAmoutOfWater = minimumHeight * (rightIndex - leftIndex)
    maximumAmountOfWater = Math.max(maximumAmountOfWater, currentAmoutOfWater)

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++
    } else {
      rightIndex--
    }
  }

  return maximumAmountOfWater
};