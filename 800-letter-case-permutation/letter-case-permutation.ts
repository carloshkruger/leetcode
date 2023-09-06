function letterCasePermutation(s: string): string[] {
  const answer = [s]
  const nums = ['0','1','2','3','4','5','6','7','8','9']

  for (let i = 0; i < s.length; i++) {
    if (nums.includes(s[i])) {
      continue
    }
    const length = answer.length
    for (let j = 0; j < length; j++) {
      let current = answer[j].split('')
      current[i] = toggleCase(s[i])
      answer.push(current.join(''))
    }
  }

  return answer
};

function toggleCase(letter: string): string {
  if (letter.toUpperCase() === letter) {
    return letter.toLowerCase()
  }
  return letter.toUpperCase()
}