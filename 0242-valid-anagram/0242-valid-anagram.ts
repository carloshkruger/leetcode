function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    
    const sMap = new Map()
    for (const letter of s) {
        sMap.set(letter, (sMap.get(letter) ?? 0) + 1)
    }
    for (const letter of t) {
        if (!sMap.has(letter) || sMap.get(letter) === 0) {
            return false
        }
        sMap.set(letter, sMap.get(letter) - 1)
    }
    
    for (const count of sMap.values()) {
        if (count !== 0) {
            return false
        }
    }
        
    return true
};