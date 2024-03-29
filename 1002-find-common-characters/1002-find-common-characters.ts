function commonChars(words: string[]): string[] {
    const wordMap = new Map()
    
    for (const letter of words[0]) {
        wordMap.set(letter, (wordMap.get(letter) ?? 0) + 1)
    }
    
    for (let i = 1; i < words.length; i++) {
        const currentWordMap = new Map()
        for (const letter of words[i]) {
            currentWordMap.set(letter, (currentWordMap.get(letter) ?? 0) + 1)
        }
        for (const key of wordMap.keys()) {
            if (!currentWordMap.has(key)) {
                wordMap.delete(key)
            } else if (currentWordMap.get(key) !== wordMap.get(key)) {
                wordMap.set(key, Math.min(currentWordMap.get(key), wordMap.get(key)))
            }
        }
    }
            
    const answer = []
    
    for (const [key, count] of wordMap.entries()) {
        for (let i = 0; i < count; i++) {
            answer.push(key)
        }
    }
            
    return answer
};