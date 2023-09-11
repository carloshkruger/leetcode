function trap(height: number[]): number {
  let trappedWater = 0
  let leftIndex = 0
  let rightIndex = height.length - 1
  let maxLeftHeight = height[leftIndex]
  let maxRightHeight = height[rightIndex]

  while (leftIndex <= rightIndex) {
    if (maxLeftHeight <= maxRightHeight) {
      maxLeftHeight = Math.max(maxLeftHeight, height[leftIndex])
      trappedWater += maxLeftHeight - height[leftIndex]
      leftIndex++
    } else {
      maxRightHeight = Math.max(maxRightHeight, height[rightIndex])
      trappedWater += maxRightHeight - height[rightIndex]
      rightIndex--
    }
  }

  return trappedWater
};