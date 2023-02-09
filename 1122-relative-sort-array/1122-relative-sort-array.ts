function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const hashMap = new Map()
    for (const item of arr1) {
        hashMap.set(item, (hashMap.get(item) ?? 0) + 1)
    }
    const answer = []
    for (const item of arr2) {
        for (let i = 0; i < hashMap.get(item); i++) {
            answer.push(item)
        }
        hashMap.delete(item)        
    }
    const rest = [...hashMap.entries()].sort((a,b) => a[0] - b[0]).reduce((agg, current) => {
        for (let i = 0; i < current[1]; i++) {
            agg.push(current[0])
        }
        return agg
    }, [])
    return answer.concat(rest)
};