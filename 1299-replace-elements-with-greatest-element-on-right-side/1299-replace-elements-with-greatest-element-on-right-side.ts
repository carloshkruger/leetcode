function replaceElements(arr: number[]): number[] {
    if (!arr.length) {
        return []
    }
    
    let greatest = arr[arr.length-1]
    
    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i]
        arr[i] = greatest
        greatest = Math.max(greatest, temp)       
    }
    
    arr[arr.length-1] = -1
    
    return arr
};