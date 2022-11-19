function addBinary(a: string, b: string): string {
    if (a.length > b.length) {     
        const length = a.length - b.length
        for (let i = 0; i < length; i++) {
            b = `0${b}`
        }
    } else if (b.length > a.length) {     
        const length = b.length - a.length
        for (let i = 0; i < length; i++) {
            a = `0${a}`
        }
    }

    const result = []
    let carry = 0
    
    for (let i = a.length-1; i>=0 || (i === -1 && carry === 1); i--) {
        const sum = (Number(a[i] ?? 0)) + (Number(b[i] ?? 0)) + carry

        carry = sum === 2 || sum === 3 ? 1 : 0

        result.unshift(sum === 1 || sum === 3 ? 1 : 0)
    }
    
    return result.join('')
};