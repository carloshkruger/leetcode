function longestCommonPrefix(strs: string[]): string {
    let result = ''
    for (const letter of strs[0]) {
        let isCommonPrefix = true
        for (const word of strs) {
            if (!word.startsWith(result+letter)) {
                isCommonPrefix = false
                break
            }
        }
        if (isCommonPrefix) {
            result += letter
        }
    }
    return result
};