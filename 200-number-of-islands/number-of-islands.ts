function numIslands(grid: string[][]): number {
    const visited = new Set<string>()
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (isIsland(grid, i, j, visited)) {
                count++
            }
        }
    }

    return count
};

function isIsland(grid: string[][], row: number, col: number, visited: Set<string>): boolean {
    const isRowOutOfBounds = row < 0 || row >= grid.length
    if (isRowOutOfBounds) {
        return false
    }

    const isColOutOfBounds = col < 0 || col >= grid[row].length
    if (isColOutOfBounds) {
        return false
    }

    if (grid[row][col] === '0') {
        return false
    }
    const key = `${row},${col}`
    if (visited.has(key)) {
        return false
    }
    visited.add(key)

    isIsland(grid, row + 1, col, visited)
    isIsland(grid, row - 1, col, visited)
    isIsland(grid, row, col + 1, visited)
    isIsland(grid, row, col - 1, visited)

    return true
}