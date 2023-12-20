function lengthOfLongestSubstring(s: string): number {
    const charList = new Set()
    let leftIndex = 0
    let longest = 0

    for (const char of s) {
        while (charList.has(char)) {
            charList.delete(s[leftIndex])
            leftIndex++
        }
        charList.add(char)
        longest = Math.max(longest, charList.size)
    }

    return longest
};