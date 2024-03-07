function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  const result = []

  for (let i = 0; i < firstList.length; i++) {
    for (let j = 0; j < secondList.length; j++) {
      if (firstList[i][0] <= secondList[j][1] && firstList[i][1] >= secondList[j][0]) {
        const start = Math.max(firstList[i][0], secondList[j][0])
        const end = Math.min(firstList[i][1], secondList[j][1])
        result.push([start, end])
      }
    }
  }

  return result
};