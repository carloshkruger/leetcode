function trap(height: number[]): number {
  let stack = []
  let trappedWater = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack.at(-1)]) {
      const middleIndex = stack.pop()
      if (!stack.length) {
        break
      }
      const prevIndex = stack.at(-1)
      const minHeight = Math.min(height[i], height[prevIndex]) - height[middleIndex]
      const distance = i - prevIndex - 1
      const currentTrappedWater = minHeight * distance
      trappedWater += currentTrappedWater
    }
    stack.push(i)
  }

  return trappedWater
};