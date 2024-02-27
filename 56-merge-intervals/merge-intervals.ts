function merge(intervals: number[][]): number[][] {
  if (!intervals.length) {
    return []
  }

  intervals.sort((a, b) => a[0] - b[0])

  let start = intervals[0][0]
  let end = intervals[0][1]

  const list = []

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      list.push([start, end])
      start = intervals[i][0]
      end = intervals[i][1]
    } else {
      end = Math.max(end, intervals[i][1])
    }
  }

  list.push([start, end])

  return list
};