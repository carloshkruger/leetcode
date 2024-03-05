function minWindow(s: string, t: string): string {
  const tCount = new Map
  for (const char of t) {
    tCount.set(char, (tCount.get(char) ?? 0) + 1)
  }

  let windowStart = 0
  let matches = 0
  let minChar = ''
  let minLength = Infinity

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd]
    if (tCount.has(char)) {
      tCount.set(char, tCount.get(char) - 1)
      if (tCount.get(char) === 0) {
        matches++
      }
    }

    while (matches === tCount.size && windowStart <= windowEnd) {
      if (windowEnd - windowStart + 1 < minLength) {
        minLength = windowEnd - windowStart + 1
        minChar = s.substring(windowStart, windowEnd + 1)
      }

      if (tCount.has(s[windowStart])) {
        if (tCount.get(s[windowStart]) === 0) {
          matches--
        }
        tCount.set(s[windowStart], tCount.get(s[windowStart]) + 1)
      }
      windowStart++
    }
  }

  return minChar
};