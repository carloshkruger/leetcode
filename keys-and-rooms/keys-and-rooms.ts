function canVisitAllRooms(rooms: number[][]): boolean {
    const queue = [...rooms[0]]
    const visited = new Set()
    visited.add(0)
    
    while (queue.length) {
        const current = queue.shift()
        
        if (!visited.has(current)) {
            queue.push(...rooms[current])   
            visited.add(current)
        }
    }
    
    return visited.size === rooms.length
};