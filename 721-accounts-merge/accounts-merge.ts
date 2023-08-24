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

  const answer = []
  const visited = new Set()
  for (const key in graph) {
    const list = []
    const seek = (email: string) => {
      if (visited.has(email)) {
        return
      }
      visited.add(email)
      list.push(email)

      for (const neighbor of graph[email]) {
        seek(neighbor)
      }
    }
    seek(key)
    if (list.length) {
      list.sort()
      list.unshift(owner[key])
      answer.push(list)
    }
  }

  return answer
};