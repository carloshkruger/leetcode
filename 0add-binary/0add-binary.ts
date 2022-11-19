function addBinary(a: string, b: string): string {
    let aIndex = a.length - 1
    let bIndex = b.length - 1

    const result = []
    let carry = 0
    
    while (aIndex >= 0 || bIndex >= 0 || (aIndex < 0 && bIndex < 0 && carry === 1)) {
        const sum = (Number(a[aIndex] ?? 0)) + (Number(b[bIndex] ?? 0)) + carry

        carry = sum === 2 || sum === 3 ? 1 : 0

        result.unshift(sum === 1 || sum === 3 ? 1 : 0)
        aIndex--
        bIndex--
    }

    return result.join('')
};