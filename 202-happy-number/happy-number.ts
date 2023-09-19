function isHappy(n: number): boolean {
  const visited = new Set()
  let current = n.toString()

  while (true) {
    if (visited.has(current)) {
      return false
    }
    visited.add(current)

    current = current
      .split('')
      .map(num => Number(num) ** 2)
      .reduce((a,b) => a+b, 0)
      .toString()
    

    if (current === '1') {
      return true
    }
  }
};