function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inDegree = new Map()
  const graph = new Map()

  for (let i = 0; i < numCourses; i++) {
    inDegree.set(i, 0)
  }

  for (const [destiny, source] of prerequisites) {
    inDegree.set(destiny, inDegree.get(destiny) + 1)
    const list = graph.get(source) ?? []
    list.push(destiny)
    graph.set(source, list)
  }
  
  const queue = []
  for (const [key, value] of inDegree.entries()) {
    if (value === 0) {
      queue.push(key)
    }
  }
  
  const answer = []
  while (queue.length) {
    const current = queue.shift()
    answer.push(current)
    inDegree.delete(current)
    if (graph.has(current)) {
      for (const item of graph.get(current)) {
        const itemDegree = inDegree.get(item)
        inDegree.set(item, itemDegree - 1)
        if (itemDegree === 1) {
          queue.push(item)
        } 
      }
    }
  }
  
  if (inDegree.size > 0) {
    return []
  }

  return answer
};