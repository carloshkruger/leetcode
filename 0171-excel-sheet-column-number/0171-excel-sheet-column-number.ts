function titleToNumber(columnTitle: string): number {
    const hashMap = new Map()
    hashMap.set('A', 1)
    hashMap.set('B', 2)
    hashMap.set('C', 3)
    hashMap.set('D', 4)
    hashMap.set('E', 5)
    hashMap.set('F', 6)
    hashMap.set('G', 7)
    hashMap.set('H', 8)
    hashMap.set('I', 9)
    hashMap.set('J', 10)
    hashMap.set('K', 11)
    hashMap.set('L', 12)
    hashMap.set('M', 13)
    hashMap.set('N', 14)
    hashMap.set('O', 15)
    hashMap.set('P', 16)
    hashMap.set('Q', 17)
    hashMap.set('R', 18)
    hashMap.set('S', 19)
    hashMap.set('T', 20)
    hashMap.set('U', 21)
    hashMap.set('V', 22)
    hashMap.set('W', 23)
    hashMap.set('X', 24)
    hashMap.set('Y', 25)
    hashMap.set('Z', 26)
    
    let answer = 0
    let length = columnTitle.length - 1
    
    const TOTAL_LETTERS = 26
    
    for (const letter of columnTitle) {
        answer += hashMap.get(letter) * (TOTAL_LETTERS ** length--)
    }
    
    return answer
};