function findAnagrams(s: string, p: string): number[] {
  let pCount = {}
  for (const char of p) {
    if (!(char in pCount)) {
      pCount[char] = 0
    }
    pCount[char]++
  }

  let windowStart = 0
  let anagramIndices = []
  let matches = 0
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd]
    if (char in pCount) {
      pCount[char]--
      if (pCount[char] === 0) {
        matches++
      }
    }
    if (matches === Object.keys(pCount).length) {
      anagramIndices.push(windowStart)
    }
    if (windowEnd >= p.length - 1) {
      const startChar = s[windowStart]

      if (startChar in pCount) {
        if (pCount[startChar] === 0) {
          matches--
        }
        pCount[startChar]++
      }

      windowStart++
    }
  }

  return anagramIndices
};