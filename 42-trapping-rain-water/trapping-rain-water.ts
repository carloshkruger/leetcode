function trap(height: number[]): number {
  let trappedWater = 0
  const stack = []

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length-1]] < height[i]) {
      const middleIndex = stack.pop()
      if (!stack.length) {
        break
      }
      const leftHeight = height[stack[stack.length-1]]
      const minHeight = Math.min(leftHeight, height[i]) - height[middleIndex]
      const distance = i - stack[stack.length-1] - 1
      trappedWater += distance * minHeight
    }
    stack.push(i)
  }

  return trappedWater
};