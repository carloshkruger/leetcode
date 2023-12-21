function merge(intervals: number[][]): number[][] {
    if (!intervals.length) {
        return []
    }

    intervals.sort((a, b) => a[0] - b[0])

    let start = intervals[0][0]
    let end = intervals[0][1]
    const mergedIntervals = []

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval[0] <= end) {
            end = Math.max(end, interval[1])
        } else {
            mergedIntervals.push([start, end])
            start = interval[0]
            end = interval[1]
        }
    }

    mergedIntervals.push([start, end])

    return mergedIntervals
};