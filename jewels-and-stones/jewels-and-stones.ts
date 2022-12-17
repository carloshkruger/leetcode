function numJewelsInStones(jewels: string, stones: string): number {
    const stonesMap = new Map()
    let answer = 0
    for (const stone of stones) {
        stonesMap.set(stone, (stonesMap.get(stone) ?? 0) + 1)
    }
    for (const jewel of jewels) {
        if (stonesMap.has(jewel)) {
            answer += stonesMap.get(jewel)
        }
    }
    return answer
};