function combinationSum(candidates: number[], target: number): number[][] {
  const combinations = []
  const visited = new Set()

  function backtrack(currentSum: number, currentValues: number[]): void {
    if (currentSum > target) {
      return
    }
    if (currentSum === target) {
      const key = currentValues.sort().join('-')
      if (visited.has(key)) {
        return
      }
      visited.add(key)
      combinations.push(currentValues)
      return
    }
    for (const candidate of candidates) {
      backtrack(currentSum + candidate, [...currentValues, candidate])
    }
  }

  backtrack(0, [])

  return combinations
};