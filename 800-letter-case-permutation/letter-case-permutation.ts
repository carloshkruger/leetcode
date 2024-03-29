function letterCasePermutation(s: string): string[] {
  const answer = [s]

  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(Number(s[i]))) {
      continue
    }
    const length = answer.length
    for (let j = 0; j < length; j++) {
      const newValue = 
        answer[j].substring(0, i)
        + toggleCase(s[i])
        + answer[j].substring(i+1)
      answer.push(newValue)
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