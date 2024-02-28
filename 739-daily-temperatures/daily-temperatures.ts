function dailyTemperatures(temperatures: number[]): number[] {
  const stack: { value: number, index: number }[] = []
  const answer = []

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && stack.at(-1).value <= temperatures[i]) {
      stack.pop()
    }

    if (stack.length === 0) {
      answer.push(0)
    } else {
      const distance = stack.at(-1).index - i
      answer.push(distance)
    }

    stack.push({ value: temperatures[i], index: i })
  }

  return answer.reverse()
};