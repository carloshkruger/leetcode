function generateParenthesis(n: number): string[] {
  const answer = []
  const stack = [{
    str: '',
    leftCount: 0,
    rightCount: 0 
  }]

  while (stack.length) {
    const current = stack.pop()
    if (current.leftCount === n && current.rightCount === n) {
      answer.push(current.str)
    } else {
      if (current.leftCount < n) {
        stack.push({
          str: `${current.str}(`,
          leftCount: current.leftCount + 1,
          rightCount: current.rightCount
        })
      }
      if (current.leftCount > current.rightCount) {
        stack.push({
          str: `${current.str})`,
          leftCount: current.leftCount,
          rightCount: current.rightCount + 1
        })
      }
    }
  }

  return answer
};