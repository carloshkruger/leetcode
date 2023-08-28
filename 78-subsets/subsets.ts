function subsets(nums: number[]): number[][] {
  const result = [[]]

  for (const num of nums) {
    for (const subset of [...result]) {
      if (!subset.includes(num)) {
        result.push([...subset, num])
      }
    }
  }

  return result
};