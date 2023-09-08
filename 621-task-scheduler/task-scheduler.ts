function leastInterval(tasks: string[], n: number): number {
  if (n === 0) {
    return tasks.length
  }
  const taskCount = new Map()
  for (const task of tasks) {
    taskCount.set(task, (taskCount.get(task) ?? 0) + 1)
  }
  const orderedTaskCount = [...taskCount.entries()].sort((a,b) => a[1]-b[1])
  const stack = []
  let intervalCount = 0

  while (orderedTaskCount.length) {
    let i = n + 1
    while (i > 0 && orderedTaskCount.length) {
      const [task, taskCount] = orderedTaskCount.pop()
      if (taskCount > 1) {
        stack.push([task, taskCount-1])
      }
      intervalCount++
      i--
    }

    while (stack.length) {
      orderedTaskCount.push(stack.pop())
    }
    orderedTaskCount.sort((a,b) => a[1]-b[1])

    if (orderedTaskCount.length > 0) {
      intervalCount += i
    }
  }

  return intervalCount
};

