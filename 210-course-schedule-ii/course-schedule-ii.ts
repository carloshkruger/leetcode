function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = {}
  const inDegree = {}
  for (let i = 0; i < numCourses; i++) {
    graph[i] = []
    inDegree[i] = 0
  }

  for (const prerequisite of prerequisites) {
    inDegree[prerequisite[0]]++
    graph[prerequisite[1]].push(prerequisite[0])
  }

  const queue = []
  for (const key in inDegree) {
    if (inDegree[key] === 0) {
      queue.push(key)
    }
  }

  const sortedList = []
  while (queue.length) {
    const current = queue.shift()
    sortedList.push(current)

    for (const child of graph[current]) {
      inDegree[child]--
      if (inDegree[child] === 0) {
        queue.push(child)
      }
    }
  }

  if (sortedList.length === numCourses) {
    return sortedList
  }

  return []
};