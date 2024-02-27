function insert(intervals: number[][], newInterval: number[]): number[][] {
  const newList = []
  let index = 0

  while (index < intervals.length && newInterval[0] > intervals[index][1]) {
    newList.push(intervals[index])
    index++
  }
  while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0])
    newInterval[1] = Math.max(newInterval[1], intervals[index][1])
    index++
  }
  newList.push(newInterval)
  while (index < intervals.length) {
    newList.push(intervals[index])
    index++
  }

  return newList
};