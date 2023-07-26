function longestCommonPrefix(strs: string[]): string {
    let smallestWord = strs[0]
    
    for (const str of strs) {
        if (str.length < smallestWord.length) {
            smallestWord = str
        }
    }
    
    let commonPrefix = ''
    
    for (let i = 0; i < smallestWord.length; i++) {
        let hasCommonPrefix = true
        for (const str of strs) {
            if (str[i] !== smallestWord[i]) {
                hasCommonPrefix = false
                break
            }
        }
        if (!hasCommonPrefix) {
            break
        } else {
            commonPrefix += smallestWord[i]
        }
    }
    
    return commonPrefix
};