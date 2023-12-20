function backspaceCompare(s: string, t: string): boolean {
    const sStack = []
    const tStack = []

    for (const char of s) {
        if (char === '#') {
            sStack.pop()
        } else {
            sStack.push(char)
        }
    }

    for (const char of t) {
        if (char === '#') {
            tStack.pop()
        } else {
            tStack.push(char)
        }
    }

    if (sStack.length !== tStack.length) {
        return false
    }

    while (sStack.length) {
        if (sStack.pop() !== tStack.pop()) {
            return false
        }
    }

    return true
};