function mySqrt(x: number): number {
  let count = 0
  let oddValue = 1

  while (x > 0) {
    x -= oddValue
    oddValue += 2
    count++
  }

  if (x < 0) {
    count--
  }

  return count
};