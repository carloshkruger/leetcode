function wordBreak(s: string, wordDict: string[]): boolean {
  const cache = {}

  function helper(str: string): boolean {
    if (str in cache) {
      return cache[str]
    }
    if (str === '') {
      return true
    }
    for (const word of wordDict) {
      if (str.startsWith(word) && helper(str.substring(word.length))) {
        cache[str] = true
        return true
      }
    }
    cache[str] = false
    return false
  }

  return helper(s)
};