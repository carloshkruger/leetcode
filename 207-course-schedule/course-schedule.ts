function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const inbound = {}
  const graph = {}

  for (let i = 0; i < numCourses; i++) {
    graph[i] = []
  }

  for (const prerequisite of prerequisites) {
    if (!(prerequisite[0] in inbound)) {
      inbound[prerequisite[0]] = 0
    }
    graph[prerequisite[1]].push(prerequisite[0])
    inbound[prerequisite[0]]++
  }

  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (!(i in inbound)) {
      queue.push(i)
    }
  }

  while (queue.length) {
    const item = String(queue.shift())

    for (const destiny of graph[item]) {
      inbound[destiny] -= 1
      if (inbound[destiny] === 0) {
        delete inbound[destiny]
        queue.push(destiny)
      }
    }
  }

  return Object.keys(inbound).length === 0
};