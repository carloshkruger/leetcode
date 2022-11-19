function strStr(haystack: string, needle: string): number {
    const length = haystack.length - needle.length
    
    for (let i = 0; i <= length; i++) {
        let found = true
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i+j]) {
                found = false
                break
            }
        }
        if (found) {
            return i
        }
    }
    return -1
};