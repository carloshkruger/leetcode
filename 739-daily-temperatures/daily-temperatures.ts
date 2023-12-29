function dailyTemperatures(temperatures: number[]): number[] {
    const stack = []
    const answer = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
        const current = temperatures[i]
        while (stack.length && current >= stack.at(-1).value) {
            stack.pop()
        }
        if (stack.length === 0) {
            answer.push(0)
        } else {
            answer.push(stack.at(-1).index - i)
        }

        stack.push({ value: current, index: i })
    }

    return answer.reverse()
};