function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0])

    const merged = []
    let start = intervals[0][0]
    let end = intervals[0][1]

    for (const currentInterval of intervals) {
        if (currentInterval[0] > end) {
            merged.push([start, end])
            start = currentInterval[0]
            end = currentInterval[1]
        } else {
            start = Math.min(start, currentInterval[0])
            end = Math.max(end, currentInterval[1])
        }
    }

    merged.push([start, end])

    return merged
};