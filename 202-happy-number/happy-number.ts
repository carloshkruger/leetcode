function isHappy(n: number): boolean {
  const visited = new Set()
  let current = n

  while (true) {
    if (visited.has(current)) {
      return false
    }
    visited.add(current)

    let aux = current
    let sum = 0
    while (aux > 0) {
      sum += (aux % 10) ** 2
      aux = Math.floor(aux / 10)
    }

    current = sum
    if (current === 1) {
      return true
    }
  }
};