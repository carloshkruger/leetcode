function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (!prerequisites.length) {
    return true
  }

  const indegree: number[] = new Array(numCourses).fill(0);
  const graph: number[][] = new Array(numCourses).fill([]).map(() => []);

  for (const prerequisite of prerequisites) {
    graph[prerequisite[1]].push(prerequisite[0]);
    indegree[prerequisite[0]] += 1;
  }

  const sourcesQueue = []
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) {
      sourcesQueue.push(i);
    }
  }

  let count = 0

  while (sourcesQueue.length) {
    const current = sourcesQueue.shift()
    count++

    for (const child of graph[current]) {
      indegree[child]--
      if (indegree[child] === 0) {
        sourcesQueue.push(child)
      }
    }
  }

  return count === numCourses
};

