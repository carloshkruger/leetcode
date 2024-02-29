function topKFrequent(words: string[], k: number): string[] {
  const frequencyMap = new Map()
  for (const word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) ?? 0) + 1)
  }

  const orderedFrequencyList = [...frequencyMap.entries()].sort((a,b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0])
    }

    if (b[1] > a[1]) {
      return 1
    }

    return -1
  })

  return orderedFrequencyList.slice(0, k).map(item => item[0])
};
