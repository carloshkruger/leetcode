function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const graph = buildGraph(flights)
  const priorityQueue = [[src, 0, -1]]
  const visited = new Map()

  while (priorityQueue.length) {
    priorityQueue.sort((a, b) => a[1] - b[1])
  
    const [currentNode, currentPrice, currentStops] = priorityQueue.shift()

    if (currentStops > k) {
      continue
    }
    if (currentNode === dst) {
      return currentPrice
    }
    if (!(currentNode in graph)) {
      continue
    }

    visited.set(currentNode, currentStops)

    for (const { dst: childNode, price: childPrice } of graph[currentNode]) {
      if (visited.has(childNode) && visited.get(childNode) <= currentStops + 1) {
        continue
      }
      priorityQueue.push([childNode, currentPrice + childPrice, currentStops + 1])
    }
  }

  return -1
};

function buildGraph(flights: number[][]): Graph {
  const graph: Graph = {}

  for(const flight of flights) {
    const [src, dst, price] = flight
    if (!(src in graph)) {
      graph[src] = []
    }
    if (!(dst in graph)) {
      graph[dst] = []
    }
    graph[src].push({ dst, price })
  }

  return graph
}

type Graph = {
  [key: string]: GraphItem[]
}

type GraphItem = {
  dst: number,
  price: number
}