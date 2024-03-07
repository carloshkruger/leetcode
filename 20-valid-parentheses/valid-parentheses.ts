function isValid(s: string): boolean {
  const stack = []
  const openingBrackets = ['(', '{', '[']
  for (const char of s) {
    if (openingBrackets.includes(char)) {
      stack.push(char)
    } else {
      const top = stack.pop()
      if ((char === '}' && top !== '{')
        || (char === ')' && top !== '(')
        || (char === ']' && top !== '[')
      ) {
        return false
      }
    }
  }

  return stack.length === 0
};