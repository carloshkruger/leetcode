function updateMatrix(mat: number[][]): number[][] {
    const answer = []
    const queue = []

    for (let i = 0; i < mat.length; i++) {
        const list = []
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                list[j] = 0
                queue.push({ row: i, col: j })
            } else {
                list[j] = Infinity
            }
        }
        answer.push(list)
    }

    const directions = [[-1,0], [1,0], [0,1], [0,-1]]

    while (queue.length) {
        const { row, col } = queue.shift()
        const newNeighborValue = answer[row][col] + 1

        for (const direction of directions) {
            const neighborRow = row + direction[0]
            const neighborCol = col + direction[1]
            const neighborValue = answer[neighborRow]?.[neighborCol]
            const isOutOfBounds = neighborValue === undefined

            if (!isOutOfBounds && newNeighborValue < neighborValue) {
                answer[neighborRow][neighborCol] = newNeighborValue
                queue.push({ row: neighborRow, col: neighborCol })
            }
        }
    }

    return answer
};