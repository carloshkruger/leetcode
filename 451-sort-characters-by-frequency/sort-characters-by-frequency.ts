function frequencySort(s: string): string {
  const charCount = new Map()
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1)
  }

  let answer = ''
  const orderedCharCount = [...charCount.entries()].sort((a,b) => b[1]-a[1])

  for (const [char, count] of orderedCharCount) {
    answer = `${answer}${char.repeat(count)}`
  }

  return answer
};