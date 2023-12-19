function isValid(s: string): boolean {
    const stack = []

    for (const char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char)
        } else {
            const top = stack.pop()
            if (char === '}' && top !== '{') {
                return false
            }
            if (char === ')' && top !== '(') {
                return false
            }
            if (char === ']' && top !== '[') {
                return false
            }
        }
    }

    return stack.length === 0
};