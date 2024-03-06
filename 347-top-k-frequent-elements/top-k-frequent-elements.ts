function topKFrequent(nums: number[], k: number): number[] {
  const frequencyCount = new Map()
  for (const num of nums) {
    frequencyCount.set(num, (frequencyCount.get(num) ?? 0) + 1)
  }

  const frequencyList = [...frequencyCount.entries()].sort((a,b) => b[1] - a[1])

  return frequencyList.slice(0, k).map(item => item[0])
};