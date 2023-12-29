function merge(intervals: number[][]): number[][] {
  if (!intervals.length) {
    return []
  }

  intervals.sort((a, b) => a[0] - b[0])

  const mergedIntervals = []
  let start = intervals[0][0]
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i]
    if (current[0] <= end) {
      end = Math.max(end, current[1])
    } else {
      mergedIntervals.push([start, end])
      start = current[0]
      end = current[1]
    }
  }

  mergedIntervals.push([start, end])

  return mergedIntervals
};