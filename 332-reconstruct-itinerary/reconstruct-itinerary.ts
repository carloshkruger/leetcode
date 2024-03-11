function findItinerary(tickets: string[][]): string[] {
  const graph = buildGraph(tickets)
  const result = []

  function dfs(from: string) {
    const destinations = graph[from] || []
    while (destinations.length) {
      const nextAirport = destinations.shift()
      dfs(nextAirport)
    }
    result.push(from)
  }

  dfs('JFK')
  
  return result.reverse()
};

function buildGraph(tickets: string[][]) {
  const graph = {}
  for (const [from, to] of tickets) {
    if (!(from in graph)) {
      graph[from] = []
    }
    graph[from].push(to)
  }
  for (const key in graph) {
    graph[key].sort((a, b) => a.localeCompare(b))
  }
  return graph
}