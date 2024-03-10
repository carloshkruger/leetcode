function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const graph = buildGraph(flights)
  const visited = Array(n).fill(Infinity)
  visited[src] = 0
  const queue = [[src, 0]]

  while (k >= 0 && queue.length) {  
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const [currentNode, currentPrice] = queue.shift()
      if (currentNode in graph) {
        for (const { dst, price } of graph[currentNode]) {
          const newPrice = currentPrice + price
          if (newPrice < visited[dst]) {
            visited[dst] = newPrice
            queue.push([dst, newPrice])
          }
        }
      }
    }

    k--
  }

  if (visited[dst] === Infinity) {
    return -1
  }
  return visited[dst]
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