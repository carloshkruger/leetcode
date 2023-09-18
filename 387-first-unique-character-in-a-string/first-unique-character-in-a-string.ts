function firstUniqChar(s: string): number {
  const charCount = new Map<string, { firstIndex: number, count: number }>()
  for (let i = 0; i < s.length; i++) {
    const data = charCount.get(s[i])
    if (data) {
      data.count++
      charCount.set(s[i], data)
    } else {
      charCount.set(s[i], { firstIndex: i, count: 1 })
    }
  }
  for (const [key, data] of charCount.entries()) {
    if (data.count === 1) {
      return data.firstIndex
    }
  }
  return -1
};