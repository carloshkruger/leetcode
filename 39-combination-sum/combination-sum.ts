function combinationSum(candidates: number[], target: number): number[][] {
  const list = []

  function backtrack(current: number[], sum: number, index: number) {
    if (sum === target) {
      list.push(current)
      return
    }
    if (sum > target) {
      return
    }
    if (index >= candidates.length) {
      return
    }
    backtrack([...current, candidates[index]], sum + candidates[index], index)
    backtrack([...current], sum, index + 1)
  }

  backtrack([], 0, 0)

  return list
};