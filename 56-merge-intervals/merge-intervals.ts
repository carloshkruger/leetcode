function merge(intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0])

  const merged: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > merged[merged.length-1][1]) {
      merged.push(intervals[i])
    } else {
      merged[merged.length-1][1] = Math.max(
        merged[merged.length-1][1],
        intervals[i][1]
      )
    }
  }

  return merged
};