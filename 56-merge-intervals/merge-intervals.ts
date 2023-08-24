function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0])
    const merged = []
    let interval = intervals[0]

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > interval[1]) {
            merged.push([...interval])
            interval = intervals[i]
        } else {
            interval[0] = Math.min(interval[0], intervals[i][0])
            interval[1] = Math.max(interval[1], intervals[i][1])
        }
    }

    merged.push([...interval])

    return merged
};