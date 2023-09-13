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

  function backtrack(current: string, index: number) {
    if (current.length === digits.length) {
      answer.push(current)
      return
    }

    const letters = map[digits[index]]

    for (let i = 0; i < letters.length; i++) {
      backtrack(current + letters[i], index + 1)
    }
  }

  backtrack('', 0)

  return answer
};