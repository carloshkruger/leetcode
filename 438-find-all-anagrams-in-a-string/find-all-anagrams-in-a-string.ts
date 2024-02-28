function findAnagrams(s: string, p: string): number[] {
  const pCount = new Map()
  for (const char of p) {
    pCount.set(char, (pCount.get(char) ?? 0) + 1)
  }

  const answer = []
  const currentCount = new Map()
  let leftIndex = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
    currentCount.set(s[i], (currentCount.get(s[i])??0)+1)
    count++

    if (count >= p.length) {
      let isAnagram = true
      for (const [key, count] of pCount.entries()) {
        if (!currentCount.has(key) || currentCount.get(key) !== count) {
          isAnagram = false
          break;
        }
      }
      const newCount = currentCount.get(s[leftIndex]) - 1
      if (newCount === 0) {
        currentCount.delete(s[leftIndex])
      } else {
        currentCount.set(s[leftIndex], newCount)
      }
      leftIndex++

      if (isAnagram) {
        answer.push(i - p.length + 1)
      }
    }
  }

  return answer
};