function intToRoman(num: number): string {
    const map = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    const numbers = breakNumber(num)
    const keys = Object.keys(map).reverse().map(Number)
    let answer = ''
    
    for (let number of numbers) {
        if (map[number]) {
            answer += map[number]
        } else {
            while (number > 0) {
                for (const key of keys) {
                    if (number >= key) {
                        number -= key
                        answer += map[key]
                        break
                    }
                }
            }
        }
    }
    
    return answer
};

function breakNumber(num: number): number[] {
    const list: number[] = []
    let factor = 1
    
    while (num > 0) {
        const value = (num % 10) * factor
        if (value > 0) {
            list.unshift(value)
        }
        num = Math.floor(num / 10)
        factor *= 10
    }
    
    return list
}