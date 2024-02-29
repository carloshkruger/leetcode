function pacificAtlantic(heights: number[][]): number[][] {
  const pacificSet = new Set<string>()
  const atlanticSet = new Set<string>()
  const rowLength = heights.length - 1
  const colLength = heights[0].length - 1

  function bfs(row: number, col: number, set: Set<string>, prevValue: number): void {
    if (row < 0 || col < 0 || row > rowLength || col > colLength) {
      return
    }
    if (prevValue > heights[row][col]) {
      return
    }

    const cacheKey = `${row},${col}`
    if (set.has(cacheKey)) {
      return
    }
    set.add(cacheKey)

    bfs(row + 1, col, set, heights[row][col])
    bfs(row - 1, col, set, heights[row][col])
    bfs(row, col + 1, set, heights[row][col])
    bfs(row, col - 1, set, heights[row][col])
  }

  for (let i = 0; i <= rowLength; i++) {
    bfs(i, 0, pacificSet, heights[i][0])
    bfs(i, colLength, atlanticSet, heights[i][colLength])
  }

  for (let i = 0; i <= colLength; i++) {
    bfs(0, i, pacificSet, heights[0][i])
    bfs(rowLength, i, atlanticSet, heights[rowLength][i])
  }

  const answer = []

  for (const coordinates of pacificSet.values()) {
    if (atlanticSet.has(coordinates)) {
      answer.push(coordinates.split(','))
    }
  }

  return answer
};