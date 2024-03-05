function characterReplacement(s: string, k: number): number {
  let maxLetterCount = 0
  let windowStart = 0
  let map = new Map()
  let maxLength = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const count = (map.get(s[windowEnd]) ?? 0) + 1
  
    map.set(s[windowEnd], count)
    maxLetterCount = Math.max(maxLetterCount, count)
    
    if (windowEnd - windowStart + 1 - maxLetterCount > k) {
      const newCount = map.get(s[windowStart]) - 1
      map.set(s[windowStart], newCount)
      windowStart++
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)  
  }

  return maxLength
};