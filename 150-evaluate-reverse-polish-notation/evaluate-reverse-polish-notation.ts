function evalRPN(tokens: string[]): number {
  const stack = []

  for (const char of tokens) {
    if (!['+', '-', '*', '/'].includes(char)) {
      stack.push(Number(char))
    } else {
      const rightValue = Number(stack.pop())
      const leftValue = Number(stack.pop())

      if (char === '+') {
        stack.push(leftValue + rightValue)
      } else if (char === '-') {
        stack.push(leftValue - rightValue)
      } else if (char === '*') {
        stack.push(leftValue * rightValue)
      } else if (char === '/') {
        stack.push(parseInt((leftValue / rightValue).toString()))
      }
    }
  }

  return stack.pop()
};