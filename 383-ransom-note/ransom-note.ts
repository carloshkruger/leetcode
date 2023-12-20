function canConstruct(ransomNote: string, magazine: string): boolean {
    const lettersCount = new Map()
    for (const letter of magazine) {
        lettersCount.set(letter, (lettersCount.get(letter) ?? 0) + 1)
    }

    for (const letter of ransomNote) {
        if (!lettersCount.has(letter)) {
            return false
        }
        const newLetterCount = lettersCount.get(letter) - 1

        if (newLetterCount === 0) {
            lettersCount.delete(letter)
        } else {
            lettersCount.set(letter, newLetterCount)
        }
    }

    return true
};