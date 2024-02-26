function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const targetColor = image[sr][sc]
  const visited = new Set()

  function bfs(row: number, col: number): void {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) {
      return
    }
    if (image[row][col] !== targetColor) {
      return
    }
    if (image[row][col] === color) {
      return
    }

    const key = `${row},${col}`
    if (visited.has(key)) {
      return
    }
    visited.add(key)

    image[row][col] = color

    bfs(row + 1, col)
    bfs(row - 1, col)
    bfs(row, col + 1)
    bfs(row, col - 1)
  }

  bfs(sr, sc)

  return image
};