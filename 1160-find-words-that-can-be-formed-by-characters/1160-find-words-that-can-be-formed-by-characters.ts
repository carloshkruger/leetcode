function countCharacters(words: string[], chars: string): number {
    const charsMap = new Map()
    for (const char of chars) {
        charsMap.set(char, (charsMap.get(char) ?? 0) + 1)
    }
    let answer = 0
    for (const word of words) {
        const currentWordMap = new Map()
        for (const char of word) {
            currentWordMap.set(char, (currentWordMap.get(char) ?? 0) + 1)
        }
        let isGood = true
        for (const [char, count] of currentWordMap.entries()) {
            if (!charsMap.has(char) || count > charsMap.get(char)) {
                isGood = false
                break;
            }  
        }
        if (isGood) {
            answer += word.length
        }
    }

    return answer
};