function combinationSum(candidates: number[], target: number): number[][] {
    const answer = new Set<string>()

    function isValidState(state: number[]): boolean {
        return sum(state) === target
    }

    function sum(nums: number[]): number {
        let totalSum = 0
        for (let i = 0; i < nums.length; i++) {
            totalSum += nums[i]
        }
        return totalSum
    }

    function getCandidates(state: number[]): number[] {
        const totalSum = sum(state)
        const validCandidates = []
        for (const candidate of candidates) {
            if (totalSum+candidate <= target) {
                validCandidates.push(candidate)
            }
        }
        return validCandidates
    }

    function backtrack(state: number[]) {
        if (isValidState(state)) {
            answer.add([...state].sort((a,b) => a-b).join('-'))
            return
        }
        for (const validCandidate of getCandidates(state)) {
            state.push(validCandidate)
            backtrack(state)
            state.pop()
        }
    }

    backtrack([])

    return [...answer.values()].map(item => item.split('-').map(Number))
};