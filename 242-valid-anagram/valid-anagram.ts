function isAnagram(s: string, t: string): boolean {
  const sCharCount = new Map()
  for (const char of s) {
    sCharCount.set(char, (sCharCount.get(char) ?? 0) + 1)
  }

  for (const char of t) {
    if (!sCharCount.has(char)) {
      return false
    }
    const newCount = sCharCount.get(char) - 1
    if (newCount === 0) {
      sCharCount.delete(char)
    } else {
      sCharCount.set(char, newCount)
    }
  }

  return sCharCount.size === 0
};