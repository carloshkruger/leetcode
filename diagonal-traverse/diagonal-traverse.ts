function findDiagonalOrder(mat: number[][]): number[] {
    const mLength = mat.length
    const nLength = mat[0].length
    const answerLength = mLength * nLength
    const answer = []
    let m = 0
    let n = 0
    let direction: 'up' | 'down' = 'up'
    
    while (answer.length < answerLength) {
        answer.push(mat[m][n])
        
        if (direction === 'up') {
            if (n === (nLength - 1)) {
                m += 1
                direction = 'down'
            } else if (m === 0) {
                n += 1
                direction = 'down'
            } else {
                n += 1
                m -= 1
            }
        } else {
            if (m === (mLength - 1)) {
                n += 1
                direction = 'up'
            } else if (n === 0) {
                m += 1   
                direction = 'up'
            } else {
                n -= 1
                m += 1
            }
        }
    }
    
    return answer
};