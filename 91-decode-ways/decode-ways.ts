function numDecodings(s: string): number {
  const cache = {}

  function helper(s: string) {
    if (s in cache) {
      return cache[s]
    }
    if (s === '') {
      return 1
    }
    if (s[0] === '0') {
      return 0
    }
    let twoCharResult = 0
    if (s.length > 1 && Number(`${s[0]}${s[1]}`) <= 26) {
      twoCharResult = helper(s.substring(2))
    }
    cache[s] = helper(s.substring(1)) + twoCharResult
    return cache[s]
  }

  return helper(s)
};