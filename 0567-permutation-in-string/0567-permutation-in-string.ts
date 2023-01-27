function checkInclusion(s1: string, s2: string): boolean {
    const s1Ordered = s1.split('').sort().join('')
    let currentString = ''
    for (let i = 0; i < s2.length; i++) {
        currentString += s2[i]
        
        if (currentString.length === s1Ordered.length) {
            let currentStringOrdered = currentString.split('').sort().join('')
            if (currentStringOrdered === s1Ordered) {
                return true
            }
            currentString = currentString.slice(1)
        }
    }
    return false
};