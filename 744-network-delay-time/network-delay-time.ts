function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = buildGraph(times)
  const visited = Array(n+1).fill(Infinity)
  visited[k] = 0
  
  const queue = [[k, 0]]

  while (queue.length) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const [currentNode, currentTime] = queue.shift()

      const neighbors = graph[currentNode] ?? []

      for (const [nextNode, nextTime] of neighbors) {
        const newTime = currentTime + nextTime
        if (newTime < visited[nextNode]) {
          visited[nextNode] = newTime
          queue.push([nextNode, newTime])
        }
      }
    }
  }

  visited.shift()

  const max = Math.max(...visited)
  if (max === Infinity) {
    return -1
  }
  return max
};

function buildGraph(times: number[][]): Graph {
  const graph: Graph = {}

  for (const time of times) {
    const [source, destination, duration] = time
    if (!(source in graph)) {
      graph[source] = []
    }
    graph[source].push([destination, duration])
  }

  return graph
}

type Graph = {
  [key: string]: GraphItem[]
}
 
type GraphItem = [number, number]