function spiralOrder(matrix: number[][]): number[] {
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let left = 0
  
  const answer = []
  const matrixLength = matrix.length * matrix[0].length

  while (answer.length < matrixLength) {
    // right
    for (let i = left; i <= right && answer.length < matrixLength; i++) {
      answer.push(matrix[top][i])
    }
    top++

    // bottom
    for (let i = top; i <= bottom && answer.length < matrixLength; i++) {
      answer.push(matrix[i][right])
    }
    right--

    // left
    for (let i = right; i >= left && answer.length < matrixLength; i--) {
      answer.push(matrix[bottom][i])
    }
    bottom--

    // up
    for (let i = bottom; i >= top && answer.length < matrixLength; i--) {
      answer.push(matrix[i][left])
    }
    left++
  }

  return answer
};