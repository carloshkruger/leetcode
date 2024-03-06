function isHappy(n: number): boolean {
  const set = new Set()

  while (true) {
    if (n === 1) {
      return true
    }
    if (set.has(n)) {
      return false
    }
    set.add(n)

    let sum = 0
    let aux = n
    while (aux > 0) {
      sum += (aux % 10) ** 2
      aux = Math.floor(aux / 10)
    }

    n = sum
  }
};