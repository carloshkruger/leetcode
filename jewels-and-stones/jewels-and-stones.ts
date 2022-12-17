function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsMap = new Map()
    let answer = 0
    for (const jewel of jewels) {
        jewelsMap.set(jewel, true)
    }
    for (const stone of stones) {
        if (jewelsMap.has(stone)) {
            answer++
        }
    }
    return answer
};