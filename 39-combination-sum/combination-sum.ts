function combinationSum(candidates: number[], target: number): number[][] {
  const combinations = []

  function backtrack(currentSum: number, currentValues: number[], currentIndex: number): void {
    if (currentSum > target || currentIndex >= candidates.length) {
      return
    }
    if (currentSum === target) {
      combinations.push([...currentValues])
      return
    }
    currentValues.push(candidates[currentIndex])
    backtrack(currentSum + candidates[currentIndex], currentValues, currentIndex)
    currentValues.pop()
    backtrack(currentSum, currentValues, currentIndex + 1)
  }

  backtrack(0, [], 0)

  return combinations
};