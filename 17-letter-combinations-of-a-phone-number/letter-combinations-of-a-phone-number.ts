function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return []
  }

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  const combinations = []

  function combine(current: string, digitIndex: number): void {
    if (current.length === digits.length) {
      combinations.push(current)
      return
    }
    if (digitIndex >= digits.length) {
      return
    }

    const letters = map[digits[digitIndex]]
    for (const letter of letters) {
      combine(current + letter, digitIndex + 1)
    }
  }

  combine('', 0)

  return combinations
};