function topKFrequent(nums: number[], k: number): number[] {
  const frequencyCount = new Map()
  for (const num of nums) {
    frequencyCount.set(num, (frequencyCount.get(num) ?? 0) + 1)
  }

  const frequencyList = []

  for (const [key, count] of frequencyCount.entries()) {
    if (!frequencyList[count]) {
      frequencyList[count] = []
    }
    frequencyList[count].push(key)
  }

  const answer = []
  for (let i = frequencyList.length - 1; i >= 0; i--) {
    if (frequencyList[i]) {
      for (const num of frequencyList[i]) {
        answer.push(num)
        if (answer.length === k) {
          return answer
        }
      }
    }
  }
  return answer
};