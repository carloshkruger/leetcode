function totalFruit(fruits: number[]): number {
    const basketCount = {}
    let leftIndex = 0
    let maxFruits = 0
    let currentCount = 0

    for (let i = 0; i < fruits.length; i++) {
        if (!(fruits[i] in basketCount)) {
            basketCount[fruits[i]] = 0
        }
        basketCount[fruits[i]] += 1
        currentCount++

        while (Object.keys(basketCount).length > 2) {
            currentCount--
            basketCount[fruits[leftIndex]] -= 1
            if (basketCount[fruits[leftIndex]] === 0) {
                delete basketCount[fruits[leftIndex]]
            }
            leftIndex++
        }

        maxFruits = Math.max(maxFruits, currentCount)
    }

    return maxFruits
};