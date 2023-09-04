function findSubstring(s: string, words: string[]): number[] {
  const wordsCount = new Map()
  for (const word of words) {
    wordsCount.set(word, (wordsCount.get(word) ?? 0) + 1)
  }

  const totalSubstringLength = words.length * words[0].length
  const answer = []

  for (let i = 0; i < (s.length - totalSubstringLength + 1); i++) {
    const wordsSeen = new Map()
    for (let j = 0; j < words.length; j++) {
      const wordStartIndex = i + j * words[0].length
      const currentWord = s.substring(wordStartIndex, wordStartIndex + words[0].length)

      if (!wordsCount.has(currentWord)) {
        break
      }
      const count = (wordsSeen.get(currentWord) ?? 0) + 1
      if (count > wordsCount.get(currentWord)) {
        break
      }
      wordsSeen.set(currentWord, count)
      if (j + 1 === words.length) {
        answer.push(i)
      }
    }
  }

  return answer
};