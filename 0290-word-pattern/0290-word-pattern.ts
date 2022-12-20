function wordPattern(pattern: string, s: string): boolean {
    const wordList = s.split(' ')
    const dictionaryPatternToWord = new Map()
    const dictionaryWordToPattern = new Map()
    
    if (wordList.length !== pattern.length) {
        return false
    }
    
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i]
        if (!dictionaryPatternToWord.has(pattern[i]) && !dictionaryWordToPattern.has(word)) {
            dictionaryPatternToWord.set(pattern[i], word)
            dictionaryWordToPattern.set(word, pattern[i])
        } else if (dictionaryPatternToWord.get(pattern[i]) !== word && dictionaryWordToPattern.get(word) !== pattern[i]) {
            return false
        }
    }
    
    return true
};