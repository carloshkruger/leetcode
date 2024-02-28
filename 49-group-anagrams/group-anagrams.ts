function groupAnagrams(strs: string[]): string[][] {
  const group = {}

  for (const str of strs) {
    const orderedStr = str.split('').sort().join('')
    if (!(orderedStr in group)) {
      group[orderedStr] = []
    }
    group[orderedStr].push(str)
  }

  return Object.values(group)
};