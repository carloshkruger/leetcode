function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length
    const n = mat[0].length
    const queue = []
    const answer = []

    for (let i = 0; i < m; i++) {
        queue.push([])
        answer.push([])
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                answer[i][j] = 0
                queue.push({ i, j })
            } else {
                answer[i][j] = Number.MAX_VALUE
            }
        }
    }

    const directions = [[-1,0],[1,0],[0,-1],[0,1]]
    
    while (queue.length) {
        const { i, j } = queue.shift()
        
        for (const direction of directions) {
            const row = i+direction[0]
            const col = j+direction[1]
            const value = answer[row]?.[col]
            
            if (value !== undefined && value > answer[i][j]+1) {
                answer[row][col] = answer[i][j]+1
                queue.push({ i: row, j: col })
            }
        }
    }
    
    return answer
};