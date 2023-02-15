function numIdenticalPairs(nums: number[]): number {
    const frequencyMap = new Map()
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1)
    }
    let answer = 0
    for (const count of frequencyMap.values()) {
        answer += Math.floor((count * (count - 1)) / 2)
    }
    return answer
};