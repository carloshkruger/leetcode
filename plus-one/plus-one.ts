function plusOne(digits: number[]): number[] {
    if (digits.at(-1) < 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
        return digits
    }
    
    let rest = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            rest = 1
        } else if (rest > 0) {
            digits[i] = digits[i] + rest
            rest = 0
            break
        }
    }
    if (rest > 0) {
        digits.unshift(1)
    }
    return digits
};