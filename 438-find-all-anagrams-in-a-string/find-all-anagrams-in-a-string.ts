function findAnagrams(s: string, p: string): number[] {
    const pCharCount = new Map()
    for (const char of p) {
        pCharCount.set(char, (pCharCount.get(char) ?? 0) + 1)
    }

    let leftIndex = 0
    let count = 0
    const answer = []
    const currentCharCount = new Map()

    for (let i = 0; i < s.length; i++) {
        currentCharCount.set(s[i], (currentCharCount.get(s[i]) ?? 0) + 1)
        count++

        if (count >= p.length) {
            if (isAnagram(pCharCount, currentCharCount)) {
                answer.push(leftIndex)
            }
            const newCount = currentCharCount.get(s[leftIndex]) - 1
            if (newCount === 0) {
                currentCharCount.delete(s[leftIndex])
            } else {
                currentCharCount.set(s[leftIndex], newCount)
            }
            leftIndex++
        }
    }

    return answer
};

function isAnagram(map1: Map<string, number>, map2: Map<string, number>): boolean {
    if (map1.size !== map2.size) {
        return false
    }

    for (const [key, value] of map1.entries()) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false
        }
    }

    return true
}