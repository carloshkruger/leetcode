function isValid(s: string): boolean {
    const stack = []
    
    for (const item of s) {
        if (['(', '[', '{'].includes(item)) {
            stack.push(item)
        } else if (item === ')') {
            if (stack.pop() !== '(') {
                return false
            }          
        } else if (item === ']') {
            if (stack.pop() !== '[') {
                return false
            }          
        } else if (item === '}') {
            if (stack.pop() !== '{') {
                return false
            }          
        }
    }
    return stack.length === 0
};