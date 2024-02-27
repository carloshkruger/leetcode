function lengthOfLongestSubstring(s: string): number {
  const visited = new Set()
  let leftIndex = 0
  let longest = 0

  for (let i = 0; i < s.length; i++) {
    while (visited.has(s[i])) {
      visited.delete(s[leftIndex])
      leftIndex++
    }
    
    visited.add(s[i])
    longest = Math.max(longest, visited.size)
  }

  return longest
};