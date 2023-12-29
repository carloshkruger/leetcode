function leastInterval(tasks: string[], n: number): number {
  if (n === 0) {
    return tasks.length
  }

  const tasksCount = new Map()
  for (const task of tasks) {
    tasksCount.set(task, (tasksCount.get(task) ?? 0) + 1)
  }

  const orderStack = (stack: any[][]) => {
    stack.sort((a, b) => a[1] - b[1])
  }

  const stack = [...tasksCount.entries()]
  orderStack(stack)

  let unitsOfTime = 0

  while (stack.length) {
    let currentN = n
    const auxStack = []
    while (stack.length && currentN >= 0) {
      const [key, value] = stack.pop()
      if (value > 1) {
        auxStack.push([key, value - 1])
      }
      unitsOfTime++
      currentN--
    }

    while (auxStack.length) {
      stack.push(auxStack.pop())
    }
    orderStack(stack)
    
    if (stack.length) {
      unitsOfTime += (currentN + 1)
    }
  }

  return unitsOfTime
};