function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = new Map()
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }
    
    let leastSum = Number.MAX_VALUE
    let answer = []
    for (let i = 0; i < list2.length; i++) {
        const indexSum = map.get(list2[i]) + i
        if (map.has(list2[i]) && indexSum < leastSum) {
            leastSum = indexSum
            answer = [list2[i]]
        } else if (map.has(list2[i]) && indexSum === leastSum) {
            answer.push(list2[i])
        }
    }
    
    return answer
};