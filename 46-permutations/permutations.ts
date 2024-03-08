function permute(nums: number[]): number[][] {
  const permutations = []

  function helper(currentList: number[]): void {
    if (currentList.length === nums.length) {
      permutations.push([...currentList])
      return
    }
    for (const num of nums) {
      if (!currentList.includes(num)) {
        helper([...currentList, num])
      }
    }
  }

  helper([])

  return permutations
};