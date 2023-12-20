function romanToInt(s: string): number {
    const map = {
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
    let value = 0
    while (index < s.length) {
        if (map[`${s[index]}${s[index+1]}`]) {
            value += map[`${s[index]}${s[index+1]}`]
            index += 2
        } else if (map[s[index]]) {
            value += map[s[index]]
            index += 1
        }
    }

    return value
};