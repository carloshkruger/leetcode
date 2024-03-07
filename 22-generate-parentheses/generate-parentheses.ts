function generateParenthesis(n: number): string[] {
  let list = []

  function helper(current: string, left: number, right: number): void {
    if (left === n && right === n) {
      list.push(current)
      return
    }
    if (left < n) {
      helper(`${current}(`, left + 1, right)
    }
    if (right < left) {
      helper(`${current})`, left, right + 1)
    }
  }

  helper('', 0, 0)

  return list
};