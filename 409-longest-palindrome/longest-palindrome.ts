function longestPalindrome(s: string): number {
    const charCount = new Map()
    
    for (const char of s) {
        charCount.set(char, (charCount.get(char) ?? 0) + 1)
    }
    
    let longest = 0
    let hasOddCount = false

    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            longest += count
        } else {
            hasOddCount = true
            longest += count - 1
        }
    }

    if (hasOddCount) {
        longest++
    }

    return longest
};