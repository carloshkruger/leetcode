function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false
  }

  const hashCountS1 = new Map()
  for (const letter of s1) {
    hashCountS1.set(letter, (hashCountS1.get(letter) ?? 0) + 1)
  }

  const currentHashCount = new Map()
  let currentLength = 0
  let startIndex = 0

  for (const letter of s2) {
    currentHashCount.set(letter, (currentHashCount.get(letter) ?? 0) + 1)
    currentLength++

    if (currentLength >= s1.length) {
      if (isPermutation(hashCountS1, currentHashCount)) {
        return true
      }
      currentHashCount.set(s2[startIndex], currentHashCount.get(s2[startIndex]) - 1)
      if (currentHashCount.get(s2[startIndex]) === 0) {
        currentHashCount.delete(s2[startIndex])
      }
      startIndex++
    }
  }

  return false
};

function isPermutation(
  hashCount1: Map<string, number>,
  hashCount2: Map<string, number>
): boolean {
  if (hashCount1.size !== hashCount2.size) {
    return false
  }
  for (const [key, value] of hashCount1.entries()) {
    if (!hashCount2.has(key) || hashCount2.get(key) !== value) {
      return false
    }
  }
  return true
}