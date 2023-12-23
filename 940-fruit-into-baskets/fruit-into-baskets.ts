function totalFruit(fruits: number[]): number {
    const basketCount = new Map()
    let leftIndex = 0
    let maxFruits = 0
    let currentCount = 0

    for (let i = 0; i < fruits.length; i++) {
        basketCount.set(fruits[i], (basketCount.get(fruits[i]) ?? 0) + 1)
        currentCount++

        while (basketCount.size > 2) {
            currentCount--
            const newFruitCount = basketCount.get(fruits[leftIndex]) - 1
            if (newFruitCount === 0) {
                basketCount.delete(fruits[leftIndex])
            } else {
                basketCount.set(fruits[leftIndex], newFruitCount)
            }
            leftIndex++
        }

        maxFruits = Math.max(maxFruits, currentCount)
    }

    return maxFruits
};