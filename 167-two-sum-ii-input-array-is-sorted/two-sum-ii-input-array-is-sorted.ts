function twoSum(numbers: number[], target: number): number[] {
  let leftIndex = 0
  let rightIndex = numbers.length - 1

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex]
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1]
    }
    if (sum > target) {
      rightIndex--
    } else {
      leftIndex++
    }
  }

  return [-1, -1]
};