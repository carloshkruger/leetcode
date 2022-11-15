function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) {
        return false
    }
    
    let top = null
    let hasStartedGoingUp = false
    let hasStartedComingDown = false
    
    for (let i = 1; i < arr.length; i++) {
        const isGoingUp = arr[i] > arr[i-1]
        if (!hasStartedGoingUp && isGoingUp) {
            hasStartedGoingUp = true
        }
        const isComingDown = arr[i] < arr[i-1]
        if (!hasStartedComingDown && isComingDown) {
            hasStartedComingDown = true
        }
        const isAtTheTop = arr[i] === arr[i-1]
        
        if (isComingDown && top === null) {
            top = arr[i-1]
        }
        
        if (isAtTheTop && top === null) {
            return false
        }
        
        if ((isAtTheTop || isGoingUp) && top !== null) {
            return false
        }
    }
    
    if (!hasStartedGoingUp || !hasStartedComingDown) {
        return false
    }

    return true
};