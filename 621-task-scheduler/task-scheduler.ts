function leastInterval(tasks: string[], n: number): number {
  if (n === 0) {
    return tasks.length
  }

  const frequencyMap = new Map()
  for (const task of tasks) {
    frequencyMap.set(task, (frequencyMap.get(task) ?? 0) + 1)
  }
  let frequencyList = [...frequencyMap.entries()]

  const orderFrequencyList = () => {
    frequencyList = frequencyList.sort((a,b) => b[1] - a[1])
  }
  orderFrequencyList()

  console.log(frequencyList)

  let intervals = 0
  while (frequencyList.length) {
    let coolingTime = n + 1
    let stack = []
  
    while (coolingTime > 0 && frequencyList.length) {
      intervals++
      const [task, frequencyCount] = frequencyList.shift()
      if (frequencyCount > 1) {
        stack.push([task, frequencyCount - 1])
      }
      coolingTime--
    }

    while (stack.length) {
      frequencyList.push(stack.pop())
    }
    orderFrequencyList()

    if (frequencyList.length) {
      intervals += coolingTime
    }
  }

  return intervals
};