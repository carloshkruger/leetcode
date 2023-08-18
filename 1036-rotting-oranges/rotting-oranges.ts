function orangesRotting(grid: number[][]): number {
    const visited = new Set()
    let { rotten: queue, freshCount } = findAllRottenOrangesAndFreshCount(grid)

    let minutes = 0

    while (queue.length) {
        const [row, col, distance] = queue.shift()
        
        const directions = [[-1,0], [1,0], [0,-1], [0,1]]

        for (const [i, j] of directions) {
            const key = `${row+i},${col+j}`
            const neighborCell = grid[row+i]?.[col+j]
            if (neighborCell === 1 && !visited.has(key)) {
                queue.push([row+i, col+j, distance+1])
                visited.add(key)
                minutes = Math.max(minutes, distance+1)
                freshCount--
            }
        }
    }

    if (freshCount > 0) {
        return -1
    }

    return minutes
};

function findAllRottenOrangesAndFreshCount(grid: number[][]): { rotten: number[][], freshCount: number} {
    const rotten = []
    let freshCount = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                rotten.push([i, j, 0])
            } else if (grid[i][j] === 1) {
                freshCount++
            }
        }
    }

    return { rotten, freshCount }
}
