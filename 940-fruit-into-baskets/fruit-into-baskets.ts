function totalFruit(fruits: number[]): number {
  const map = new Map()
  let leftIndex = 0
  let max = 0

  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], (map.get(fruits[i]) ?? 0) + 1)

    while (map.size > 2) {
      const newCount = map.get(fruits[leftIndex]) - 1
      if (newCount === 0) {
        map.delete(fruits[leftIndex])
      } else {
        map.set(fruits[leftIndex], newCount)
      }
      leftIndex++
    }

    max = Math.max(max, i - leftIndex + 1)
  }

  return max
};