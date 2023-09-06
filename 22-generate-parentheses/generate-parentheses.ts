function generateParenthesis(n: number): string[] {
  const answer = []
  const queue = [{
    str: '',
    openCount: 0,
    closeCount: 0
  }]

  while (queue.length) {
    const current = queue.shift()
    if (current.openCount === n && current.closeCount === n) {
      answer.push(current.str)
    } else {
      if (current.openCount < n) {
        queue.push({
          str: `${current.str}(`,
          openCount: current.openCount + 1,
          closeCount: current.closeCount
        })
      }
      if (current.openCount > current.closeCount) {
        queue.push({
          str: `${current.str})`,
          openCount: current.openCount,
          closeCount: current.closeCount + 1
        })
      }
    }
  }

  return answer
};