function distributeCandies(candyType: number[]): number {
    const half = candyType.length / 2
    const candyTypesAlreadyEatean = {}
    let candiesAlreadyEaten = 0
    
    for (let i = 0; i < candyType.length; i++) {
        if (!candyTypesAlreadyEatean[candyType[i]]) {
            candyTypesAlreadyEatean[candyType[i]] = true
            candiesAlreadyEaten++
            
            if (candiesAlreadyEaten === half) {
                return candiesAlreadyEaten
            }
        }
    }
    
    return candiesAlreadyEaten
};