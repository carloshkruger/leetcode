function combinationSum(candidates: number[], target: number): number[][] {
    const answer = new Set<string>()

    function isValidState(state: number[]): boolean {
        return sum(state) === target
    }

    function sum(nums: number[]): number {
        return nums.reduce((acc,current) => acc+current, 0)
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

    function backtracking(state: number[]) {
        if (isValidState(state)) {
            answer.add([...state].sort((a,b) => a-b).join('-'))
            return
        }
        for (const validCandidate of getCandidates(state)) {
            state.push(validCandidate)
            backtracking(state)
            state.pop()
        }
    }

    backtracking([])

    return [...answer.values()].map(item => item.split('-').map(Number))
};