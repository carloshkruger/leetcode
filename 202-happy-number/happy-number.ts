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

    n = n.toString()
      .split('')
      .map(item => Number(item) ** 2)
      .reduce((item, total) => total + item, 0) 
  }
};