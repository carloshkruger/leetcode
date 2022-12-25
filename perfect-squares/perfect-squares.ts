function numSquares(n: number): number {
    const visited = new Set()
    const queue = [0]
    let count = 0
    
    while (queue.length) {
        const queueSize = queue.length
        for (let i = 0; i < queueSize; i++) {
            const current = queue.shift()

            if (current === n) {
                return count
            }
            for (let i = 1; current + i * i <= n; i++) {
                if (visited.has(current + i * i)) {
                    continue
                }
                visited.add(current + i * i)
                queue.push(current + i * i)
            }
        }
        count++
    }
    return count
};