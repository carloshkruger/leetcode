function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) {
    return []
  }

  const answer = []

  let leftIndex = 0
  let currentSubString = ''

  const currentSubStringCount = new Map<string, number>()
  const pLetterCount = new Map<string, number>()
  for (const letter of p) {
    pLetterCount.set(letter, (pLetterCount.get(letter) ?? 0) + 1)
  }

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    currentSubString = `${currentSubString}${s[rightIndex]}`
    currentSubStringCount.set(s[rightIndex], (currentSubStringCount.get(s[rightIndex]) ?? 0) + 1)

    if (currentSubString.length === p.length) {
      if (isAnagram(currentSubStringCount, pLetterCount)) {
        answer.push(leftIndex)
      }
      currentSubString = currentSubString.substring(1)
      const count = currentSubStringCount.get(s[leftIndex])
      if (count === 1) {
        currentSubStringCount.delete(s[leftIndex]) 
      } else {
        currentSubStringCount.set(s[leftIndex], count - 1)
      }
      leftIndex++
    }
  }

  return answer
};

function isAnagram(
  currentSubStringCount: Map<string, number>,
  pLetterCount: Map<string, number>
): boolean {
  if (currentSubStringCount.size !== pLetterCount.size) {
    return false
  }
  for (const [key, count] of currentSubStringCount) {
    if (!pLetterCount.has(key) || pLetterCount.get(key) !== count) {
      return false
    }
  }
  return true
}