function leastInterval(tasks: string[], n: number): number {
  if (tasks.length === 0) {
    return 0
  }

  const taskCount = new Map()
  for (const task of tasks) {
    taskCount.set(task, (taskCount.get(task) ?? 0) + 1)
  }

  const orderedTasks = [...taskCount.entries()].sort((a,b) => a[1]-b[1])
  const stack = []

  let unitTimeCount = 0

  while (orderedTasks.length) {
    let i = n + 1
    while (i > 0 && orderedTasks.length) {
      unitTimeCount++
      i--

      const [task, count] = orderedTasks.pop()
      if (count > 1) {
        stack.push([task, count - 1])
      }
    }

    while (stack.length) {
      orderedTasks.push(stack.pop())
    }
    orderedTasks.sort((a,b) => a[1]-b[1])

    if (orderedTasks.length) {
      unitTimeCount += i
    }
  }

  return unitTimeCount
};