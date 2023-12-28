function pacificAtlantic(heights: number[][]): number[][] {
    const visitedPacific = new Set<string>()
    const visitedAtlantic = new Set<string>()
    const m = heights.length
    const n = heights[0].length 

    function dfs(row: number, col: number, visited: Set<string>, lastValue: number): void {
        const isOutOfBounds = row < 0
            || col < 0
            || row >= m
            || col >= n
        if (isOutOfBounds) {
            return
        }

        const value = heights[row][col]

        if (value < lastValue) {
            return
        }

        const cacheKey = `${row}-${col}`
        if (visited.has(cacheKey)) {
            return
        }
        visited.add(cacheKey)

        dfs(row - 1, col, visited, value)
        dfs(row + 1, col, visited, value)
        dfs(row, col - 1, visited, value)
        dfs(row, col + 1, visited, value)
    }

    for (let i = 0; i < n; i++) {
        dfs(0, i, visitedPacific, heights[0][i])
        dfs(m-1, i, visitedAtlantic, heights[m-1][i])
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, visitedPacific, heights[i][0])
        dfs(i, n-1, visitedAtlantic, heights[i][n-1])
    }

    const answer = []

    for (const value of visitedPacific.values()) {
        if (visitedAtlantic.has(value)) {
            const [row, col] = value.split('-')
            answer.push([row, col])
        }
    }

    return answer
};