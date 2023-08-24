function wordBreak(s: string, wordDict: string[]): boolean {
  const cache = {}

  function helper(text: string): boolean {
    if (text in cache) {
      return cache[text]
    }
    if (text === "") {
      return true
    }

    for (const word of wordDict) {
      if (text.startsWith(word)) {
        if (helper(text.substring(word.length))) {
          cache[text] = true
          return cache[text]
        }
      }
    }

    cache[text] = false
    return cache[text]
  }

  return helper(s)
};