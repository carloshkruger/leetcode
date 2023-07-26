function longestPalindrome(s: string): number {
    const hashTable = new Map()
    for (const letter of s) {
        hashTable.set(letter, (hashTable.get(letter) ?? 0) + 1)
    }
    let answer = 0
    let oddAlreadyUsed = false
    
    for (const sum of hashTable.values()) {
        if (sum % 2 === 0) {
            answer += sum
        } else if (!oddAlreadyUsed) {
            answer += sum
            oddAlreadyUsed = true   
        } else {
            answer += sum - 1
        }
    }
        
    return answer
};