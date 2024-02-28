function subsets(nums: number[]): number[][] {
  const list = [[]]

  for (const num of nums) {
    const listLength = list.length
    for (let i = 0; i < listLength; i++) {
      list.push([...list[i], num])
    }
  }

  return list
};