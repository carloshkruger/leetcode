function trap(height: number[]): number {
  const stack = []
  let trappedWater = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack.at(-1)]) {
      const middleIndex = stack.pop()
      if (!stack.length) {
        break
      }
      const prevIndex = stack.at(-1)
      const minHeight = Math.min(height[prevIndex], height[i]) - height[middleIndex]
      const currentDistance = i - prevIndex - 1
      const currentTrappedWater = currentDistance * minHeight
      trappedWater += currentTrappedWater
    }
    stack.push(i)
  }

  return trappedWater
};