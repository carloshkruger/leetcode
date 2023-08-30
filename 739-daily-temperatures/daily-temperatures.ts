function dailyTemperatures(temperatures: number[]): number[] {
    const stack: { value: number, index: number }[] = []
    const answer: number[] = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
      let poppedElementsCount = 0
      while (stack.length > 0 && stack.at(-1).value <= temperatures[i]) {
        poppedElementsCount++
        stack.pop()
      }

      if (stack.length === 0) {
        answer.push(0)
      } else if (poppedElementsCount === 0) {
        answer.push(1)
      } else {
        answer.push(stack.at(-1).index - i)
      }

      stack.push({ value: temperatures[i], index: i })
    }

    return answer.reverse()
};