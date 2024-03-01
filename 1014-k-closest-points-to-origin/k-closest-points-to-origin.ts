function kClosest(points: number[][], k: number): number[][] {
  const distances = []
  for (const [x, y] of points) {
    distances.push([x, y, Math.sqrt((x ** 2) + (y ** 2))])
  }

  distances.sort((a, b) => a[2] - b[2])

  return distances.slice(0, k).map(item => ([item[0], item[1]]))
};