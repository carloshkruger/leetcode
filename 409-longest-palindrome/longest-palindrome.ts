function longestPalindrome(s: string): number {
    const charCount = new Map()
    for (const char of s) {
        charCount.set(char, (charCount.get(char) ?? 0) + 1)
    }

    let longestPalindromeLength = 0
    let oddCountAlreadyUsed = false

    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            longestPalindromeLength += count
        } else if (!oddCountAlreadyUsed) {
            longestPalindromeLength += count
            oddCountAlreadyUsed = true
        } else {
            longestPalindromeLength += count - 1
        }
    }

    return longestPalindromeLength
};