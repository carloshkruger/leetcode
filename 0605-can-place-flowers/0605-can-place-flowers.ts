function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) {
        return true
    }
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (flowerbed[i-1] ?? 0) === 0 && (flowerbed[i+1] ?? 0) === 0) {
            n--
            flowerbed[i] = 1
        }
        if (n === 0) {
            break
        }
    }
    
    return n === 0
};