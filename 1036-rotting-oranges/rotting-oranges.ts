function orangesRotting(grid: number[][]): number {
  if (!grid.length) {
    return -1
  }

  const visited = new Set()
  const directions = [[-1,0], [1,0], [0,-1], [0,1]]
  let { rottenQueue, freshCount } = getRottenOrangesAndFreshCount(grid)

  if (freshCount === 0) {
    return 0
  }

  let minutes = -1

  while (rottenQueue.length) {
    minutes++

    const length = rottenQueue.length
    for (let i = 0; i < length; i++) {
      const [currentRow, currentCol] = rottenQueue.shift()

      for (const direction of directions) {
        const neighborRow = currentRow + direction[0]
        const neighborCol = currentCol + direction[1]
        const key = `${neighborRow},${neighborCol}`

        if (visited.has(key)) {
          continue
        }
        visited.add(key)

        if (grid[neighborRow]?.[neighborCol] === 1) {
          rottenQueue.push([neighborRow, neighborCol])
          freshCount--
        }
      }
    }
  }

  if (freshCount > 0) {
    return -1
  }

  return minutes
};

function getRottenOrangesAndFreshCount(grid: number[][]) {
  const rottenQueue = []
  let freshCount = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        rottenQueue.push([row, col])
      } else if (grid[row][col] === 1) {
        freshCount++
      }
    }
  }

  return {
    freshCount,
    rottenQueue
  }
}