function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const indegree: number[] = new Array(numCourses).fill(0);
    const adj: number[][] = new Array(numCourses).fill([]).map(() => []);

    for (const prerequisite of prerequisites) {
        adj[prerequisite[1]].push(prerequisite[0]);
        indegree[prerequisite[0]] += 1;
    }

    const queue: number[] = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }

    let visitedCount: number = 0;
    while (queue.length > 0) {
        const node: number = queue.shift();
        visitedCount += 1;

        for (const neighbor of adj[node]) {
            indegree[neighbor] -= 1;
            if (indegree[neighbor] == 0) {
                queue.push(neighbor);
            }
        }
    }

    return visitedCount == numCourses;
};