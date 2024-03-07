function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])

  const list = []

  let index = 0
  while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    list.push([intervals[index][0], intervals[index][1]])
    index++
  }

  while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0])
    newInterval[1] = Math.max(newInterval[1], intervals[index][1])
    index++
  }
  list.push([newInterval[0], newInterval[1]])

  while (index < intervals.length) {
    list.push([intervals[index][0], intervals[index][1]])
    index++
  }

  return list
};