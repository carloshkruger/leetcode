function addBinary(a: string, b: string): string {
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let remainder = 0
    const result = []

    while (aIndex >= 0 || bIndex >= 0) {
        let sum = Number(a[aIndex] ?? 0) + Number(b[bIndex] ?? 0) + remainder

        remainder = sum === 2 || sum === 3 ? 1 : 0
        sum = sum === 1 || sum === 3 ? 1 : 0

        result.push(sum)
        aIndex--
        bIndex--
    }
    if (remainder === 1) {
        result.push(1)
    }

    return result.reverse().join('')
};