function generateParenthesis(n: number): string[] {
  const answer = []

  function helper(current: string, openCount: number, closeCount: number) {
    if (openCount === 0 && closeCount === 0) {
      answer.push(current)
      return
    }
    if (openCount > 0) {
      helper(`${current}(`, openCount - 1, closeCount)
    }
    if (openCount < closeCount) {
      helper(`${current})`, openCount, closeCount - 1)
    }
  }

  helper('', n, n)

  return answer
};