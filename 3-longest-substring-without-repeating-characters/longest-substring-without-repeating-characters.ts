function lengthOfLongestSubstring(s: string): number {
  const map = new Map()
  let startWindow = 0
  let longest = 0

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      startWindow = Math.max(startWindow, map.get(s[i]) + 1)
    }
    longest = Math.max(longest, i - startWindow + 1)
    map.set(s[i], i)
  }

  return longest
};