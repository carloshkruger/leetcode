function isHappy(n: number): boolean {
  let current = n
  const visited = new Set()

  while (true) {
    if (visited.has(current)) {
      return false
    }

    visited.add(current)

    current = current
      .toString()
      .split('')
      .map(item => Number(item) ** 2)
      .reduce((a,b) => a + b, 0)

    if (current === 1) {
      return true
    }
  }
};