function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return []
  }

  const answer = []
  const map = {
    2: 'abc',
    3: 'def', 
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  function helper(digitIndex: number, current: string): void {
    if (current.length === digits.length) {
      answer.push(current)
      return
    }

    const letters = map[digits[digitIndex]]

    for (let i = 0; i < letters.length; i++) {
      helper(digitIndex + 1, current + letters[i])
    }
  }

  helper(0, "")

  return answer
};