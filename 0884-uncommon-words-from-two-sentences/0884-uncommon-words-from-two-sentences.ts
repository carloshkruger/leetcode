function uncommonFromSentences(s1: string, s2: string): string[] {
    const s1List = s1.split(' ')
    const s2List = s2.split(' ')
    const s1Map = new Map()
    const s2Map = new Map()
    const answer = []
    
    for (const word of s1List) {
        s1Map.set(word, (s1Map.get(word) ?? 0) + 1)
    }
    for (const word of s2List) {
        s2Map.set(word, (s2Map.get(word) ?? 0) + 1)
    }
    for (const [word, count] of s1Map.entries()) {
        if (count === 1 && !s2Map.has(word)) {
            answer.push(word)
        }        
    }
    for (const [word, count] of s2Map.entries()) {
        if (count === 1 && !s1Map.has(word)) {
            answer.push(word)
        }        
    }
    return answer
};