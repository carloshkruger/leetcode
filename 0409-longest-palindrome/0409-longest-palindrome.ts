function longestPalindrome(s: string): number {
    const map = new Map()
    
    for (const letter of s) {
        map.set(letter, (map.get(letter) ?? 0) + 1)
    }
                
    let answer = 0
    let hasOddValue = false

    for (const value of map.values()) {
        if (value % 2 === 0) {
            answer += value
        } else {
            answer += (value - 1)
            hasOddValue = true
        }
    }
        
    if (hasOddValue) {
        answer++
    }
        
    return answer
};