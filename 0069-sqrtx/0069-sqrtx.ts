function mySqrt(x: number): number {
    if (x === 0) {
        return 0
    }
    
    let start = 0
    let end = x
    
    while (start < end) {
        const middle = (start + end) / 2
        const value = middle * middle
        
        if (value === x) {
            return middle
        }
        if (value > x) {
            end = middle
        } else {
            start = middle
        }
        if (Math.floor(start) === Math.floor(end)) {
            return Math.floor(start)
        }
    }

    return -1
};