function fib(n: number): number {
  let prevPrev = 0
  let prev = 1

  for (let i = 0; i < n; i++) {
    const value = prevPrev + prev
    prevPrev = prev
    prev = value
  }

  return prevPrev
};