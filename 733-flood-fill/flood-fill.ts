function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue = [{ sr, sc }]
    const originalColor = image[sr][sc]
    const visited = new Set()

    while (queue.length) {
        const { sr, sc } = queue.shift()

        const isOutOfBounds = image[sr]?.[sc] === undefined
        if (isOutOfBounds) {
            continue
        }
        if (image[sr][sc] !== originalColor) {
            continue
        }
        if (visited.has(`${sr},${sc}`)) {
            continue
        }

        visited.add(`${sr},${sc}`)
        image[sr][sc] = color

        queue.push({ sr: sr+1, sc })
        queue.push({ sr: sr-1, sc })
        queue.push({ sr, sc: sc+1 })
        queue.push({ sr, sc: sc-1 })
    }

    return image
};