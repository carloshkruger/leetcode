function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineLetterCount = new Map()
  for (const char of magazine) {
    magazineLetterCount.set(char, (magazineLetterCount.get(char) ?? 0) + 1)
  }

  for (const char of ransomNote) {
    if (!magazineLetterCount.has(char)) {
      return false
    }
    const newCount = magazineLetterCount.get(char) - 1
    if (newCount === 0) {
      magazineLetterCount.delete(char)
    } else {
      magazineLetterCount.set(char, newCount)
    }
  }

  return true
};