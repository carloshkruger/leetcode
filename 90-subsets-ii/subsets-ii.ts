function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a,b) => a-b)

  const subsets = []

  function backtrack(index: number, subset: number[]): void {
    if (index >= nums.length) {
      subsets.push([...subset])
      return
    }

    subset.push(nums[index])
    backtrack(index + 1, subset)
    subset.pop()

    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index++
    }

    backtrack(index + 1, subset)
  }

  backtrack(0, [])

  return subsets
};