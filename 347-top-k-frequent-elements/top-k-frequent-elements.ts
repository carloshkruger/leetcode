function topKFrequent(nums: number[], k: number): number[] {
    const countMap = new Map()
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1)
    }

    const orderedList = [...countMap.entries()].sort((a, b) => b[1] - a[1])
    const answer = []

    for (let i = 0; i < k; i++) {
        answer.push(orderedList[i][0])
    }

    return answer
};