function fizzBuzz(n: number): string[] {
  const answer = []

  for (let i = 1; i <= n; i++) {
    const isDivisibleBy3 = i % 3 === 0
    const isDivisibleBy5 = i % 5 === 0

    if (isDivisibleBy3 && isDivisibleBy5) {
      answer.push('FizzBuzz')
    } else if (isDivisibleBy3) {
      answer.push('Fizz')
    } else if (isDivisibleBy5) {
      answer.push('Buzz')
    } else {
      answer.push(String(i))
    }
  }

  return answer
};