function frequencySort(s: string): string {
  const charCount = new Map()
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1)
  }

  const answer = []
  const orderedCharCount = [...charCount.entries()].sort((a,b) => b[1]-a[1])

  for (const [char, count] of orderedCharCount) {
    for (let i = 0; i < count; i++) {
      answer.push(char)
    }
  }

  return answer.join('')
};