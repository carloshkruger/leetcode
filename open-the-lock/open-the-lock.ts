function openLock(deadends: string[], target: string): number {
    const visited = new Set()
    const deadendsSet = new Set(deadends)
    
    const queue = ['0000']
    visited.add('0000')
    
    let turns = 0    
    const WHEEL_LENGTH = 4
    
    while (queue.length) {
        const queueLength = queue.length
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift()

            if (current === target) {
                return turns
            }
            
            if (deadendsSet.has(current)) {
                continue
            }

            for (let j = 0; j < WHEEL_LENGTH; j++) {
                const newCombination = current.slice(0, j) + ((Number(current[j]) + 1) % 10) + current.slice(j+1)
                const newCombination2 = current.slice(0, j) + ((Number(current[j]) + 9) % 10) + current.slice(j+1)

                if (!visited.has(newCombination)) {
                    queue.push(newCombination)
                    visited.add(newCombination)
                }
                if (!visited.has(newCombination2)) {
                    queue.push(newCombination2)
                    visited.add(newCombination2)
                }
            }
        }
        turns++
    }

    return -1
};