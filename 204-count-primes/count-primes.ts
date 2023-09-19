function countPrimes(n: number): number {
  if (n < 3) {
    return 0
  }

  const notPrimes = new Set()
  let count = 1

  for (let i = 3; i < n; i += 2) {
    if (!notPrimes.has(i)) {
      count++

      for (let j = i * i; j < n; j += 2 * i) {
        notPrimes.add(j)
      }
    }
  }

  return count
};