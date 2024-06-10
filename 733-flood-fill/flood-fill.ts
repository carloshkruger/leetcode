function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const originalValue = image[sr][sc]
  const visited = new Set()

  function bfs(row: number, col: number) {
    if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) {
      return
    }
    if (image[row][col] !== originalValue) {
      return
    }
    const cacheKey = `${row},${col}`
    if (visited.has(cacheKey)) {
      return
    }
    visited.add(cacheKey)

    image[row][col] = color

    bfs(row - 1, col)
    bfs(row + 1, col)
    bfs(row, col - 1)
    bfs(row, col + 1)
  }

  bfs(sr, sc)

  return image
};