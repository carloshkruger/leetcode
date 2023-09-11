function generateParenthesis(n: number): string[] {
  const answer = []

  function helper(current: string, leftCount: number, rightCount: number): void {
    if (leftCount === n && rightCount === n) {
      answer.push(current)
      return
    }
    if (leftCount < n) {
      helper(`${current}(`, leftCount+1, rightCount)
    }
    if (rightCount < leftCount) {
      helper(`${current})`, leftCount, rightCount+1)
    }
  }

  helper('', 0, 0)

  return answer
};