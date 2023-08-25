function spiralOrder(matrix: number[][]): number[] {
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let left = 0
  
  const answer = []
  const matrixLength = matrix.length * matrix[0].length
  let count = 0

  while (count < matrixLength) {
    // right
    for (let i = left; i <= right && count < matrixLength; i++) {
      answer.push(matrix[top][i])
      count++
    }
    top++

    // bottom
    for (let i = top; i <= bottom && count < matrixLength; i++) {
      answer.push(matrix[i][right])
      count++
    }
    right--

    // left
    for (let i = right; i >= left && count < matrixLength; i--) {
      answer.push(matrix[bottom][i])
      count++
    }
    bottom--

    // up
    for (let i = bottom; i >= top && count < matrixLength; i--) {
      answer.push(matrix[i][left])
      count++
    }
    left++
  }

  return answer
};