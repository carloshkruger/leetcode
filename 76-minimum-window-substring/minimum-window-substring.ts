function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return ''
  }

  const tHashCount = new Map()
  for (const letter of t) {
    tHashCount.set(letter, (tHashCount.get(letter) ?? 0) + 1)
  }

  let smalestLength = Infinity
  let smalestString = ''
  let windowStart = 0
  let matches = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const letter = s[windowEnd]
    if (tHashCount.has(letter)) {
      const count = tHashCount.get(letter)
      if (count === 1) {
        matches++
      }
      tHashCount.set(letter, count - 1)
    }
  
    while (matches === tHashCount.size) {
      if (windowEnd - windowStart + 1 < smalestLength) {
        smalestLength = windowEnd - windowStart + 1
        smalestString = s.substring(windowStart, windowEnd+1) 
      }
      if (tHashCount.has(s[windowStart])) {
        const count = tHashCount.get(s[windowStart])
        tHashCount.set(s[windowStart], count + 1)
        if (count >= 0) {
          matches--
        }
      }
      windowStart++
    }
  }

  return smalestString
};
