function accountsMerge(accounts: string[][]): string[][] {
  const graph = {}
  const owner = {}

  for (const account of accounts) {
    const [name, ...emails] = account

    for (const email of emails) {
      if (!(email in graph)) {
        graph[email] = new Set()
        owner[email] = name
      }
    }

    for (const email of emails) {
      for (const email2 of emails) {
        if (email !== email2) {
          graph[email].add(email2)
          graph[email2].add(email)
        }
      }
    }
  }

  const traverse = (email: string, list: string[]) => {
    if (visited.has(email)) {
      return
    }
    visited.add(email)
    list.push(email)

    for (const neighbor of graph[email]) {
      traverse(neighbor, list)
    }
  }

  const answer = []
  const visited = new Set()

  for (const key in graph) {
    const list = []

    traverse(key, list)
  
    if (list.length) {
      list.sort()
      answer.push([owner[key], ...list])
    }
  }

  return answer
};