function spiralOrder(matrix: number[][]): number[] {
  const valuesCount = matrix.length * matrix[0].length
  const list = []
  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1

  while (list.length < valuesCount) {
    // going right
    for (let i = left; i <= right && list.length < valuesCount; i++) {
      list.push(matrix[top][i])
    }
    top++

    // going down
    for (let i = top; i <= bottom && list.length < valuesCount; i++) {
      list.push(matrix[i][right])
    }
    right--

    // going left
    for (let i = right; i >= left && list.length < valuesCount; i--) {
      list.push(matrix[bottom][i])
    }
    bottom--

    // going up
    for (let i = bottom; i >= top && list.length < valuesCount; i--) {
      list.push(matrix[i][left])
    }
    left++
  }

  return list
};