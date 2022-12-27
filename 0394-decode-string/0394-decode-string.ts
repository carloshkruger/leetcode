function decodeString(s: string): string {    
    const stack = []
    
    for (const char of s) {
        if (char === ']') {
            let charactersInsideBrackets = ''
            let current = stack.pop()
            while (current !== '[') {
                charactersInsideBrackets = current + charactersInsideBrackets
                current = stack.pop()
            }
            let multiplier = ''
            while (!isNaN(Number(stack.at(-1)))) {
                multiplier = stack.pop() + multiplier
            }
            const newString = charactersInsideBrackets.repeat(Number(multiplier))       
            stack.push(newString)
        } else {
            stack.push(char)
        }
    }
    
    return stack.join('')
};