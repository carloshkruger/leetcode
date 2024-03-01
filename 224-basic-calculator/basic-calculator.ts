function calculate(s: string): number {
  const stack = []
  let sum = 0
  let index = 0
  let sign = '+'

  const isNumber = (value: string): boolean => !Number.isNaN(parseInt(value))

  while (index < s.length) {
    if (isNumber(s[index])) {
      let num = 0
      while (isNumber(s[index])) {
        num = num * 10 + Number(s[index])
        index++
      }
      index--
      if (sign === '+') {
        sum += num
      } else {
        sum -= num
      }
    } else if (s[index] === '-' || s[index] === '+') {
      sign = s[index]
    } else if (s[index] === '(') {
      stack.push(sum)
      stack.push(sign)
      sum = 0
      sign = '+'
    } else if (s[index] === ')') {
      const signStack = stack.pop()
      const valueStack = stack.pop()

      if (signStack === '+') {
        sum += valueStack
      } else {
        sum = valueStack - sum
      }
    }

    index++
  }

  return sum
};