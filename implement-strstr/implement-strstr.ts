function strStr(haystack: string, needle: string): number {
    const length = haystack.length - needle.length
    
    for (let i = 0; i <= length; i++) {
        let nextCharacters = ''
        for (let j = 0; j < needle.length; j++) {
            nextCharacters += haystack[i+j]
        }
        if (nextCharacters === needle) {
            return i
        }
    }
    return -1
};