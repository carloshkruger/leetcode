function lengthOfLongestSubstring(s: string): number {
    const map = new Map()
    let longest = 0
    let startSubstringIndex = 0

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            startSubstringIndex = Math.max(map.get(s[i]) + 1, startSubstringIndex)
        }
        longest = Math.max(longest, i - startSubstringIndex + 1)
        map.set(s[i], i)
    }

    return longest
};