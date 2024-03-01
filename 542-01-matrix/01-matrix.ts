function updateMatrix(mat: number[][]): number[][] {
  if (!mat.length) {
    return []
  }

  const queue = []
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col, 0])
      } else {
        mat[row][col] = Infinity
      }
    }
  }

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  while (queue.length) {
    let [sourceRow, sourceCol, distance] = queue.shift()
    distance++

    for (const direction of directions) {
      const neighborRow = sourceRow + direction[0]
      const neighborCol = sourceCol + direction[1]
      const currentValue = mat[neighborRow]?.[neighborCol]
      const isOutOfBounds = currentValue === undefined

      if (isOutOfBounds || currentValue === 0) {
        continue
      }

      if (distance < currentValue) {
        mat[neighborRow][neighborCol] = distance
        queue.push([neighborRow, neighborCol, distance])
      }
    }
  }

  return mat
};