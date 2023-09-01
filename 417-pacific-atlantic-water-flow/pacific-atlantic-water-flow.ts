function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights.length) {
    return []
  }

  const pacific = new Map<string, number[]>()
  const atlantic = new Map<string, number[]>()

  function dfs(row: number, col: number, visited: Map<string, number[]>, prevValue: number) {
    const currentValue = heights[row]?.[col]
    const isOutOfBounds = currentValue === undefined
    const key = `${row},${col}`
  
    if (isOutOfBounds || currentValue < prevValue || visited.has(key)) {
      return
    }
    
    visited.set(key, [row, col])
    dfs(row + 1, col, visited, currentValue)
    dfs(row - 1, col, visited, currentValue)
    dfs(row, col + 1, visited, currentValue)
    dfs(row, col - 1, visited, currentValue)
  }

  const rows = heights.length
  const cols = heights[0].length

  for (let i = 0; i < cols; i++) {
    dfs(0, i, pacific, heights[0][i])
    dfs(rows - 1, i, atlantic, heights[rows - 1][i])
  }
  for (let i = 0; i < rows; i++) {
    dfs(i, 0, pacific, heights[i][0])
    dfs(i, cols - 1, atlantic, heights[i][cols - 1])
  }

  const answer = []

  for (const [key, value] of pacific.entries()) {
    if (atlantic.has(key)) {
      answer.push(value)
    }
  }

  return answer
};