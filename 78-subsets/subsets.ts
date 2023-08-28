function subsets(nums: number[]): number[][] {
  const result = [[]]

  function dfs(index: number, current: number[]): void {
    for (let i = index; i < nums.length; i++) {
      const res = [...current, nums[i]]
      result.push(res)
      dfs(i + 1, res)
    }
  }

  dfs(0, [])

  return result
};