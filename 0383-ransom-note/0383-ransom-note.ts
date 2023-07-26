function canConstruct(ransomNote: string, magazine: string): boolean {
    const hashMap = new Map()
    for (const letter of magazine) {
        hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
    }
    for (const letter of ransomNote) {
        if (!hashMap.has(letter) || hashMap.get(letter) === 0) {
            return false
        }        
        hashMap.set(letter, hashMap.get(letter) - 1)
    }
    return true
};