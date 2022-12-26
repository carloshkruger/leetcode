function evalRPN(tokens: string[]): number {
    const stack = []
    
    for (const token of tokens) {
        if (token === '+') {
            const firstValue = stack.pop()
            const secondValue = stack.pop()
            stack.push(secondValue + firstValue)
        } else if (token === '-') {
            const firstValue = stack.pop()
            const secondValue = stack.pop()
            stack.push(secondValue - firstValue)
        } else if (token === '*') {
            const firstValue = stack.pop()
            const secondValue = stack.pop()
            stack.push(truncateTowardZero(secondValue * firstValue))
        } else if (token === '/') {
            const firstValue = stack.pop()
            const secondValue = stack.pop()
            stack.push(truncateTowardZero(secondValue / firstValue))
        } else {
            stack.push(Number(token))
        }
    }
    
    return stack.pop()
};

function truncateTowardZero(value: number): number {
    if (value < 0) {
        return Math.ceil(value)
    }
    return Math.floor(value)
}