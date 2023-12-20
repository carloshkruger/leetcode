function isAnagram(s: string, t: string): boolean {
  const hashMap = new Map()
  for (const char of s) {
    hashMap.set(char, (hashMap.get(char) ?? 0) + 1)
  }

  for (const char of t) {
    if (!hashMap.has(char)) {
      return false
    }
    const value = hashMap.get(char)
    if (value === 1) {
      hashMap.delete(char)
    } else {
      hashMap.set(char, value - 1)
    }
  }

  if (hashMap.size > 0) {
    return false
  }

  return true
};