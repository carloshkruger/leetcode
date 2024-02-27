function combinationSum(candidates: number[], target: number): number[][] {
  const list = []

  function backtrack(current: number[], sum: number, index: number) {
    if (sum === target) {
      list.push([...current])
      return
    }
    if (sum > target) {
      return
    }
    if (index >= candidates.length) {
      return
    }
    current.push(candidates[index])
    backtrack(current, sum + candidates[index], index)
    current.pop()
    backtrack(current, sum, index + 1)
  }

  backtrack([], 0, 0)

  return list
};