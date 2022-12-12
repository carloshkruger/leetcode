function imageSmoother(img: number[][]): number[][] {
    const answer = []
    
    for (let i = 0; i < img.length; i++) {
        answer.push([])

        for (let j = 0; j < img[i].length; j++) {
            let sum = img[i][j]
            let count = 1

            if (img[i][j-1] !== undefined) {
                sum += img[i][j-1]
                count++
            }
            if (img[i-1]?.[j-1] !== undefined) {
                sum += img[i-1][j-1]
                count++
            }
            if (img[i-1]?.[j] !== undefined) {
                sum += img[i-1][j]
                count++
            }
            if (img[i-1]?.[j+1] !== undefined) {
                sum += img[i-1][j+1]
                count++
            }
            if (img[i]?.[j+1] !== undefined) {
                sum += img[i][j+1]
                count++
            }
            if (img[i+1]?.[j+1] !== undefined) {
                sum += img[i+1][j+1]
                count++
            }
            if (img[i+1]?.[j] !== undefined) {
                sum += img[i+1][j]
                count++
            }
            if (img[i+1]?.[j-1] !== undefined) {
                sum += img[i+1][j-1]
                count++
            }
            
            answer[i][j] = Math.floor(sum / count)
        }
    }
    
    return answer
};