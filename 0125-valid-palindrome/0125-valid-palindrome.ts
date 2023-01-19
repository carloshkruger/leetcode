function isPalindrome(s: string): boolean {
    const newString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    
    let start = 0
    let end = newString.length - 1
    
    while (start <= end) {
        if (newString[start] !== newString[end]) {
            return false
        }
        start++
        end--
    }

    return true
};