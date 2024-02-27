function orangesRotting(grid: number[][]): number {
  let { freshCount, rotten } = getRottenOrangesAndFreshCount(grid)
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  let minutesElapsed = -1

  if (freshCount === 0) {
    return 0
  }

  while (rotten.length) {
    minutesElapsed++
    const rottenLength = rotten.length

    for (let i = 0; i < rottenLength; i++) {
      const currentRotten = rotten.shift()

      for (const direction of directions) {
        const neighborRow = currentRotten[0] + direction[0]
        const neighborCol = currentRotten[1] + direction[1]
        const neighborValue = grid[neighborRow]?.[neighborCol]

        if (neighborValue === 1) {
          rotten.push([neighborRow, neighborCol])
          grid[neighborRow][neighborCol] = 2
          freshCount--
        }
      }
    }
  }

  if (freshCount > 0) {
    return -1
  }

  return minutesElapsed
};

function getRottenOrangesAndFreshCount(grid: number[][]) {
  const rotten = []
  let freshCount = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rotten.push([i, j])
      } else if (grid[i][j] === 1) {
        freshCount++
      }
    }
  }

  return {
    freshCount,
    rotten
  }
}