function numDecodings(s: string): number {
  const map = {
    '1': 'A',
    '2': 'B',
    '3': 'C',
    '4': 'D',
    '5': 'E',
    '6': 'F',
    '7': 'G',
    '8': 'H',
    '9': 'I',
    '10': 'J',
    '11': 'K',
    '12': 'L',
    '13': 'M',
    '14': 'N',
    '15': 'O',
    '16': 'P',
    '17': 'Q',
    '18': 'R',
    '19': 'S',
    '20': 'T',
    '21': 'U',
    '22': 'V',
    '23': 'W',
    '24': 'X',
    '25': 'Y',
    '26': 'Z',
  }

  const cache = {}

  function helper(s: string) {
    if (s in cache) {
      return cache[s]
    }
    if (s === '') {
      return 1
    }
    if (!(s[0] in map)) {
      return 0
    }
    let twoCharResult = 0
    if (s.length > 1 && `${s[0]}${s[1]}` in map) {
      twoCharResult = helper(s.substring(2))
    }
    cache[s] = helper(s.substring(1)) + twoCharResult
    return cache[s]
  }

  return helper(s)
};