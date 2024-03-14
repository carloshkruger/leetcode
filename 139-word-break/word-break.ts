function wordBreak(s: string, wordDict: string[]): boolean {
  const cache = {}

  function helper(s: string): boolean {
    if (s in cache) {
      return cache[s]
    }
    if (s === '') {
      return true
    }
    for (const word of wordDict) {
      if (s.startsWith(word) && helper(s.substring(word.length))) {
        cache[s] = true
        return cache[s]
      }
    }
    cache[s] = false
    return cache[s]
  }

  return helper(s)
};