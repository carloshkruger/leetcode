function numIslands(grid: string[][]): number {
    const visited = new Map()
    const rowLength = grid.length;
    const colLength = grid[0].length
    let answer = 0
    
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === '1' && !visited.has(`${i}-${j}`)) {
                answer++
                bfs(i, j)
            }   
        }
    }
    
    function bfs(row: number, col: number): void {
        if (grid[row]?.[col] === undefined || grid[row]?.[col] === '0' || visited.has(`${row}-${col}`)) {
            return
        }
        
        visited.set(`${row}-${col}`, true)
    
        bfs(row + 1, col)
        bfs(row - 1, col)
        bfs(row, col + 1)
        bfs(row, col - 1)
    }

    return answer
};