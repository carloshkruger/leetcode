function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const visited = new Set()
  const originalValue = image[sr][sc]

  function bfs(row: number, col: number) {
    const value = image[row]?.[col]
    const isOutOfBounds = value === undefined
    if (isOutOfBounds) {
      return
    }
    const cacheKey = `${row}-${col}`
    if (visited.has(cacheKey)) {
      return 
    }
    visited.add(cacheKey)

    if (value !== originalValue) {
      return
    }

    image[row][col] = color

    bfs(row + 1, col)
    bfs(row - 1, col)
    bfs(row, col + 1)
    bfs(row, col - 1)
  }

  bfs(sr, sc)

  return image
};