function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap = new Map()
    for (const letter of magazine) {
        magazineMap.set(letter, (magazineMap.get(letter) ?? 0) + 1)
    }
    for (const letter of ransomNote) {
        if (!magazineMap.has(letter) || magazineMap.get(letter) === 0) {
            return false
        }
            
        magazineMap.set(letter, magazineMap.get(letter) - 1)
    }
        
    return true
};