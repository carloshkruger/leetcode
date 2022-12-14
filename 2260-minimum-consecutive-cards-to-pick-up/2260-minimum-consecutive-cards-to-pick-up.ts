function minimumCardPickup(cards: number[]): number {
    let minimum = Number.MAX_VALUE
    let map = new Map()
    
    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            minimum = Math.min(minimum, i - map.get(cards[i]))
        }
        
        map.set(cards[i], i)
    }
    
    return minimum !== Number.MAX_VALUE ? minimum + 1 : -1
};