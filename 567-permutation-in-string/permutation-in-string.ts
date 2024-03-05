function checkInclusion(s1: string, s2: string): boolean {
  const s1Count = new Map()
  for (const char of s1) {
    s1Count.set(char, (s1Count.get(char) ?? 0) + 1)
  }

  let leftIndex = 0
  const currentCount = new Map()

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i]
    currentCount.set(char, (currentCount.get(char) ?? 0) + 1)

    if (i >= s1.length - 1) {
      let isPermutation = true
      for (const [key, count] of s1Count.entries()) {
        if (!currentCount.has(key) || currentCount.get(key) !== count) {
          isPermutation = false
          break;
        }
      }
      if (isPermutation) {
        return true
      }
      const newCount = currentCount.get(s2[leftIndex]) - 1
      if (newCount === 0) {
        currentCount.delete(s2[leftIndex])
      } else {
        currentCount.set(s2[leftIndex], newCount)
      }
      leftIndex++
    }
  }

  return false
};
