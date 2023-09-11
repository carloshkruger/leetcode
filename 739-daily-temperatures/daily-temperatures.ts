function dailyTemperatures(temperatures: number[]): number[] {
    const stack: { value: number, index: number }[] = []
    const answer: number[] = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length-1].value <= temperatures[i]) {
        stack.pop()
      }
      if (stack.length === 0) {
        answer.push(0)
      } else {
        answer.push(stack[stack.length-1].index - i)
      }
      stack.push({ value: temperatures[i], index: i })
    }

    return answer.reverse()
};