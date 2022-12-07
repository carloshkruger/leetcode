function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) {
        return true
    }
    
    let lastIndexHasFlower = false
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && !lastIndexHasFlower && (flowerbed[i-1] ?? 0) === 0 && (flowerbed[i+1] ?? 0) === 0) {
            n--
            lastIndexHasFlower = true
        } else {
            lastIndexHasFlower = false
        }

        if (n === 0) {
            break
        }
    }
    
    return n === 0
};