function lengthOfLongestSubstring(s: string): number {
    let longest = 0
    let startSubStringIndex = 0
    let lastIndex = s.length - 1
    const map = new Map()
    
    for (let i = 0; i <= lastIndex; i++) {
        if (map.has(s[i])) {
            longest = Math.max(longest, i - startSubStringIndex)
            startSubStringIndex = Math.max(startSubStringIndex, map.get(s[i]) + 1)
        }
        map.set(s[i], i)
    }
    
    return Math.max(longest, lastIndex - startSubStringIndex + 1)
};