function dailyTemperatures(temperatures: number[]): number[] {
    const stack = []
    const answer = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        let currentTemperature = temperatures[i]
        while (stack.length && currentTemperature > stack.at(-1).value) {
            const { index } = stack.pop()
            answer[index] = i - index
        }
        stack.push({value: currentTemperature, index: i})
    }

    return answer
};