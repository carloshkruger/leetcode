function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor = image[sr][sc]
    const visited = new Set()

    function helper(row: number, col: number) {
        const isOutOfBounds = image[row]?.[col] === undefined
        if (isOutOfBounds) {
            return
        }
        if (image[row][col] !== originalColor) {
            return
        }
        const key = `${row},${col}`
        if (visited.has(key)) {
            return
        }
        visited.add(key)
        image[row][col] = color

        helper(row + 1, col)
        helper(row - 1, col)
        helper(row, col + 1)
        helper(row, col - 1)
    }

    helper(sr, sc)

    return image
};