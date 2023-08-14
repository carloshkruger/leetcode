function romanToInt(s: string): number {
    let map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }

    let index = 0
    let answer = 0
    while (index < s.length) {
        const current = s[index]
        const next = s[index + 1]
        if (current === 'I') {
            if (next !== 'V' && next !== 'X') {
                answer += map[current]
            } else {
                answer += map[current+next]
                index++
            }
        } else if (current === 'X') {
            if (next !== 'L' && next !== 'C') {
                answer += map[current]
            } else {
                answer += map[current+next]
                index++
            } 
        } else if (current === 'C') {
            if (next !== 'D' && next !== 'M') {
                answer += map[current]
            } else {
                answer += map[current+next]
                index++
            } 
        } else {
            answer += map[current]
        }

        index++
    }

    return answer
};