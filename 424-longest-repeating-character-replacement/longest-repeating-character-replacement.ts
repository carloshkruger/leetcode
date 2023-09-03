function characterReplacement(s: string, k: number): number {
  const hashCount = new Map()
  let maxRepeatLetterCount = 0
  let maxLength = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    hashCount.set(s[windowEnd], (hashCount.get(s[windowEnd]) ?? 0) + 1)
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, hashCount.get(s[windowEnd]))

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      hashCount.set(s[windowStart], hashCount.get(s[windowStart]) - 1)
      windowStart++
    }
  
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
};