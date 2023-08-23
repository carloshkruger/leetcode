function evalRPN(tokens: string[]): number {
    const operators = ['+', '-', '*', '/']
    const stack = []

    for (const token of tokens) {
        if (!operators.includes(token)) {
            stack.push(token)
        } else {
            const rightNumber = Number(stack.pop())
            const leftNumber = Number(stack.pop())

            if (token === '+') {
                stack.push(leftNumber + rightNumber)
            } else if (token === '-') {
                stack.push(leftNumber - rightNumber)
            } else if (token === '*') {
                stack.push(leftNumber * rightNumber)
            } else {
                stack.push(parseInt((leftNumber / rightNumber).toString()))
            }
        }
    }

    return stack.pop()
};