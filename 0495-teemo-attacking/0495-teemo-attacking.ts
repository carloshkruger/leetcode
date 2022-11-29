function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let seconds = 0
    
    for (let i = 0; i < timeSeries.length; i++) {
        if (timeSeries[i+1] !== undefined && timeSeries[i+1] < (timeSeries[i] + duration)) {
            seconds += (timeSeries[i+1] - timeSeries[i])
        } else {
            seconds += duration
        }
    }
    
    return seconds
};