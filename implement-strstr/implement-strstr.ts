function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) {
        return -1
    }
    if (needle.length === haystack.length && needle !== haystack) {
        return -1
    }
    
    for (let i = 0; i < haystack.length; i++) {
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