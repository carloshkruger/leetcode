function backspaceCompare(s: string, t: string): boolean {
    return getFinalText(s) === getFinalText(t)
};

function getFinalText(text: string): string {
    const stack = []
    for (const char of text) {
        if (char !== '#') {
            stack.push(char)
        } else {
            stack.pop()
        }
    }
    return stack.join('')
}