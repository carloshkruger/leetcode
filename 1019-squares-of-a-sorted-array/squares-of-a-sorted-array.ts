function sortedSquares(nums: number[]): number[] {
  let leftIndex = 0
  let rightIndex = nums.length - 1
  const list = []

  while (leftIndex <= rightIndex) {
    const leftSquare = nums[leftIndex] ** 2
    const rightSquare = nums[rightIndex] ** 2
    if (leftSquare > rightSquare) {
      list.push(leftSquare)
      leftIndex++
    } else {
      list.push(rightSquare)
      rightIndex--
    }
  }

  return list.reverse()
};