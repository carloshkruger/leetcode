function lengthOfLongestSubstring(s: string): number {
    const set = new Set()
    let leftIndex = 0
    let longestSubstringLength = 0
    
    for (const letter of s) {
        while (set.has(letter)) {
            set.delete(s[leftIndex])
            leftIndex++
        }
        set.add(letter)
        longestSubstringLength = Math.max(longestSubstringLength, set.size)
    }
    
    return longestSubstringLength
}