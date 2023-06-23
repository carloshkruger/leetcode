function topKFrequent(nums: number[], k: number): number[] {
    const hashMap = new Map()
    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) ?? 0) + 1)
    }
                    
    const answer = []
    const orderedItems = [...hashMap.entries()].sort((a, b) => b[1] - a[1])
    
    for (const item of orderedItems) {
        answer.push(item[0])
        if (answer.length === k) {
            break
        }
    }
        
    return answer
};