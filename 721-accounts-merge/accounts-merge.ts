function accountsMerge(accounts: string[][]): string[][] {
  const graph = {}
  const owners = {}

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      owners[email] = name

      for (const email2 of emails) {
        if (!(email2 in graph)) {
          graph[email2] = []
        }
        graph[email].push(email2)
      }
    }
  }
  
  const visited = new Set()
  const list = []

  for (const key in graph) {
    if (visited.has(key)) {
      continue
    }
    const currentMerge = new Set()
    const stack = [key]

    while (stack.length) {
      const item = stack.pop()
      visited.add(item)
      currentMerge.add(item)

      for (const neighbor of graph[item]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }

    const currentMergeArray = [...currentMerge.values()].sort()

    list.push([owners[key], ...currentMergeArray])
  }

  return list
};