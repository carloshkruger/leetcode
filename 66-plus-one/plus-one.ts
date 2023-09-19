function plusOne(digits: number[]): number[] {
  if (digits[digits.length-1] < 9) {
    digits[digits.length-1]++
    return digits
  }

  let carry = 0
  for (let i = digits.length-1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      carry = 1
    } else if (carry === 1) {
      digits[i]++
      carry = 0
      break
    }
  }
  if (carry === 1) {
    digits.unshift(1)
  }
  return digits
};