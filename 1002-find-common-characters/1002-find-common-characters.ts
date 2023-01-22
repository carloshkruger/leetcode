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
        const entries = wordMap.entries()
        for (const [key,value] of entries) {
            if (!currentWordMap.has(key)) {
                wordMap.delete(key)
            } else if (currentWordMap.get(key) !== value) {
                wordMap.set(key, Math.min(currentWordMap.get(key), value))
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