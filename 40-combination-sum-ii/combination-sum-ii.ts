function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a,b) => a-b)
  const list = []

  function helper(currentList: number[], currentSum: number, index: number): void {
    console.log(currentList)
    if (currentSum === target) {
      list.push([...currentList])
      return
    }
    if (currentSum > target || index >= candidates.length) {
      return
    }
    currentList.push(candidates[index])
    helper(currentList, currentSum + candidates[index], index + 1)
    currentList.pop()
    while (index < candidates.length && candidates[index] === candidates[index+1]) {
      index++
    }
    helper(currentList, currentSum, index + 1)
  }

  helper([], 0, 0)

  return list
};