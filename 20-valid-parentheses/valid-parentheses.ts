function isValid(s: string): boolean {
    const stack = []
    for (let char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char)
        } else if (stack.length === 0) {
            return false
        } else {
            const top = stack.pop()
            if (top === '(' && char !== ')'
                || top === '{' && char !== '}'
                || top === '[' && char !== ']'
            ) {
                return false
            }
        }
    }
    return stack.length === 0
};