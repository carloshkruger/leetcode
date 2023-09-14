function orangesRotting(grid: number[][]): number {
  const directions = [[-1,0], [1,0], [0,-1], [0,1]]
  const visited = new Set()

  let queue = findAllRottenOranges(grid)
  let freshCount = countFreshOranges(grid)
  let minutes = -1

  while (queue.length) {
    minutes++

    const queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      const [currentRow, currentCol] = queue.shift()

      for (const direction of directions) {
        const newRow = currentRow + direction[0]
        const newCol = currentCol + direction[1]

        if (grid[newRow]?.[newCol] === 1 && !visited.has(`${newRow},${newCol}`)) {
          freshCount--
          queue.push([newRow, newCol])
          visited.add(`${newRow},${newCol}`)
        }
      }

      visited.add(`${currentRow},${currentCol}`)
    }
  }

  if (freshCount > 0) {
    return -1
  }
  if (minutes === -1) {
    return 0
  }
  return minutes
};

function findAllRottenOranges(grid: number[][]): number[][] {
  const rotten = []

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rotten.push([i, j])
      }
    }
  }

  return rotten
}

function countFreshOranges(grid: number[][]): number {
  let freshCount = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++
      }
    }
  }

  return freshCount
}
