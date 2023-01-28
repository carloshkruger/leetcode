function lengthOfLongestSubstring(s: string): number {
    const hashMap = new Map()
    let queue = []
    let longestSubstringLength = 0
    
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            longestSubstringLength = Math.max(longestSubstringLength, hashMap.size)
            
            while (queue.length && queue[0] !== s[i]) {
                hashMap.delete(queue.shift())
            }
            queue.shift()
        }
        hashMap.set(s[i], i)
        queue.push(s[i])
    }
    
    return Math.max(longestSubstringLength, hashMap.size)
}