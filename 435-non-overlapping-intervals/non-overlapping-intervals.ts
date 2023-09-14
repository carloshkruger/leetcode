function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a,b) => a[0] - b[0])

  let prevEnd = intervals[0][1]
  let eraseCount = 0

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1]
    } else {
      eraseCount++
      prevEnd = Math.min(prevEnd, intervals[i][1])
    }
  }

  return eraseCount
};
