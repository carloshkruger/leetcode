function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const dictionaryST = new Map()
    const dictionaryTS = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if ((dictionaryST.has(s[i]) && dictionaryST.get(s[i]) !== t[i]) ||
            (dictionaryTS.has(t[i]) && dictionaryTS.get(t[i]) !== s[i])) {
            return false
        }
        dictionaryST.set(s[i], t[i])
        dictionaryTS.set(t[i], s[i])
    }
    
    return true
};