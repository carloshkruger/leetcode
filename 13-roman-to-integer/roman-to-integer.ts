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
        const chars = map[current+next] ? current+next : current
        answer += map[chars]
        index += chars.length
    }

    return answer
};