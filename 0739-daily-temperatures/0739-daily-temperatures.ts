function dailyTemperatures(temperatures: number[]): number[] {
    const stack = []
    const answer = new Array(temperatures.length)
    let answerIndex = temperatures.length - 1

    for (let i = temperatures.length - 1; i >= 0; i--) {
        let currentTemperature = temperatures[i]
        let poppedElementCount = 0
        let stackSize = stack.length
        while (stack.length && currentTemperature >= stack.at(-1).value) {
            stack.pop()
            poppedElementCount++
        }
        if (stackSize === poppedElementCount) {
            answer[answerIndex] = 0
        } else if (stackSize === stack.length) {
            answer[answerIndex] = 1
        } else {
            answer[answerIndex] = stack.at(-1).index - i
        }
        stack.push({value: currentTemperature, index: i})
        answerIndex--
    }

    return answer
};