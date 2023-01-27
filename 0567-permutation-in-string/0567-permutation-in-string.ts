function checkInclusion(s1: string, s2: string): boolean {
    const s1HashMap = new Map()
    for (const letter of s1) {
        s1HashMap.set(letter, (s1HashMap.get(letter) ?? 0) + 1)
    }

    const currentHashMap = new Map()

    let slowIndex = 0
    let currentLength = 0
    for (let i = 0; i < s2.length; i++) {
        currentHashMap.set(s2[i], (currentHashMap.get(s2[i]) ?? 0) + 1)
        currentLength++
        
        if (currentLength === s1.length) {
            let ok = true

            for (const [key, count] of currentHashMap.entries()) {
                if (!s1HashMap.has(key) || count > s1HashMap.get(key)) {
                    ok = false
                    break
                }
            }

            if (ok) {
                return true
            }

            const currentCount = currentHashMap.get(s2[slowIndex])

            if (currentCount === 1) {
                currentHashMap.delete(s2[slowIndex])
            } else {
                currentHashMap.set(s2[slowIndex], currentCount - 1)
            }

            slowIndex++
            currentLength--
        }
    }

    return false
};