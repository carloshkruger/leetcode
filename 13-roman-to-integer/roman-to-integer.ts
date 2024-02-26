function romanToInt(s: string): number {
  const map = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  let index = 0
  let value = 0
  while (index < s.length) {
    const twoChars = s[index] + s[index + 1]
    if (twoChars in map) {
      value += map[twoChars]
      index += 2
    } else {
      value += map[s[index]]
      index += 1
    }
  }

  return value
};