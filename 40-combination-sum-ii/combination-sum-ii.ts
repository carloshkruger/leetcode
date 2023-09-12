function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a,b) => a-b)
  const combinations = []

  function dfs(current: number[], sum: number, index: number) {
    if (sum === target) {
      combinations.push([...current])
      return
    }
    if (sum > target || index >= candidates.length) {
      return
    }

    const currentCandidate = candidates[index]

    current.push(currentCandidate)
    sum += currentCandidate
    dfs(current, sum, index + 1)

    while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
      index++
    }

    current.pop()
    sum -= currentCandidate
    dfs(current, sum, index + 1)
  }

  dfs([], 0, 0)

  return combinations
};