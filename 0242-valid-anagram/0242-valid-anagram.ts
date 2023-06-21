function isAnagram(s: string, t: string): boolean {
    const hashMap = new Map()
    for (const letter of s) {
        hashMap.set(letter, (hashMap.get(letter) || 0) + 1)
    }
    for (const letter of t) {
        if (!hashMap.has(letter) || hashMap.get(letter) === 0) {
            return false
        }
        hashMap.set(letter, hashMap.get(letter) - 1)
    }
    for (const value of hashMap.values()) {
        if (value !== 0) {
            return false
        }
    }
    return true
};