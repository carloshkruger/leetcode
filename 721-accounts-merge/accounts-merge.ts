function accountsMerge(accounts: string[][]): string[][] {
  const graph = {}
  const nameMap = {}

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!(email in graph)) {
        graph[email] = []
        nameMap[email] = name
      }
      for (const email2 of emails) {
        if (email !== email2) {
          graph[email].push(email2)
        }
      }
    }
  }

  const visited = new Set()
  const groupedEmails = {}
  const answer = []

  const groupEmails = (originalEmail: string, currentEmail: string) => {
    if (visited.has(currentEmail)) {
      return
    }
    groupedEmails[originalEmail].push(currentEmail)
    visited.add(originalEmail)
    visited.add(currentEmail)
    for (const childEmail of graph[currentEmail]) {
      groupEmails(originalEmail, childEmail)
    }
  }

  for (const email in graph) {
    if (!visited.has(email)) {
      if (!(email in groupedEmails)) {
        groupedEmails[email] = []
      }
      groupEmails(email, email)
    }
  }

  for (const email in groupedEmails) {
    answer.push([nameMap[email], ...groupedEmails[email].sort()])
  }

  return answer
};