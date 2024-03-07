function merge(intervals: number[][]): number[][] {
  if (!intervals.length) {
    return []
  }

  intervals.sort((a, b) => a[0] - b[0])

  const mergedIntervals = []

  let start = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      mergedIntervals.push([start, end])
      start = intervals[i][0]
      end = intervals[i][1]
    } else {
      end = Math.max(end, intervals[i][1])
    }
  }
  mergedIntervals.push([start, end])

  return mergedIntervals
};