function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inboundCount = {}
  const graph = {}

  for (let i = 0; i < numCourses; i++) {
    graph[i] = []
    inboundCount[i] = 0
  }

  for (const prerequisite of prerequisites) {
    inboundCount[prerequisite[0]]++
    graph[prerequisite[1]].push(prerequisite[0])
  }

  const sourcesStack = []
  for (let i = 0; i < numCourses; i++) {
    if (inboundCount[i] === 0) {
      sourcesStack.push(i)
    }
  }

  const answer = []
  let count = 0
  while (sourcesStack.length) {
    count++
    
    const course = sourcesStack.pop()
    answer.push(course)

    for (const child of graph[course]) {
      inboundCount[child]--
      if (inboundCount[child] === 0) {
        sourcesStack.push(child)
      }
    }
  }

  if (count === numCourses) {
    return answer
  }
  return []
};