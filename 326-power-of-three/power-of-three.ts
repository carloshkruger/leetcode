function isPowerOfThree(n: number): boolean {
  if (n < 1) {
    return false
  }
  
  while (n > 1) {
    n /= 3

    if (!Number.isInteger(n)) {
      return false
    }
  }

  return n === 1
};