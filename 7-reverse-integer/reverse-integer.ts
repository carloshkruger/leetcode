function reverse(x: number): number {
  const isNegative = x < 0
  if (isNegative) {
    x *= -1
  }

  let multiplierFactor = 1
  let aux = x
  while (aux > 0) {
    aux = Math.floor(aux / 10)
    multiplierFactor *= 10
  }
  multiplierFactor /= 10
  let answer = 0
  const maxValue = 2 ** 31

  while (x > 0) {
    let rest = x % 10
    answer += rest * multiplierFactor
    if (answer > maxValue) {
      return 0
    }
    multiplierFactor /= 10
    x = Math.floor(x / 10)
  }

  if (isNegative) {
    return answer * -1
  }

  return answer
};