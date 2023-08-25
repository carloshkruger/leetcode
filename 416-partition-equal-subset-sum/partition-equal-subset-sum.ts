function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, item) => acc + item, 0)
  
  if (sum % 2 !== 0) {
    return false
  }

  const target = sum / 2
  const sumSet = new Set<number>()
  sumSet.add(0)

  for (const num of nums) {
    if (num === target) {
      return true
    }

    const sumSetValues = [...sumSet.values()]

    for (const value of sumSetValues) {
      if (num + value === target) {
        return true
      }
      sumSet.add(num + value)
    }
  }

  return sumSet.has(target)
};