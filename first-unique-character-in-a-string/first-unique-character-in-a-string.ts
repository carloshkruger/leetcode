function firstUniqChar(s: string): number {
    const hashMap = new Map()
    for (const letter of s) {
        hashMap.set(letter, (hashMap.get(letter) ?? 0) + 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i]) && hashMap.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};