function permute(nums: number[]): number[][] {
  const list = []

  function helper(current: number[]) {
    if (current.length === nums.length) {
      list.push(current)
      return
    }
    
    for (const num of nums) {
      if (!current.includes(num)) {
        helper([...current, num])
      }
    }
  }

  helper([])

  return list
};