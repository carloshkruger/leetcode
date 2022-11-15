function checkIfExist(arr: number[]): boolean {
    const hashTable = {}
    
    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i] * 2] = i
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (hashTable[arr[i]] !== undefined && hashTable[arr[i]] !== i) {
            return true
        }
    }
    
    return false
};