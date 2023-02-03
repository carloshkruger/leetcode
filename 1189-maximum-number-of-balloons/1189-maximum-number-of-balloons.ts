function maxNumberOfBalloons(text: string): number {
    const hashMap = new Map()
    for (const letter of text) {
        hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
    }
    const countB = hashMap.get('b') ?? 0
    const countA = hashMap.get('a') ?? 0
    const countL = Math.floor((hashMap.get('l') ?? 0) / 2)
    const countO = Math.floor((hashMap.get('o') ?? 0) / 2)
    const countN = hashMap.get('n') ?? 0
    
    return Math.min(countB, countA, countL, countO, countN)
};