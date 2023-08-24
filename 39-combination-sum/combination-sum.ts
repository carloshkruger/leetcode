function combinationSum(candidates: number[], target: number): number[][] {
    const answer = []

    function backtrack(state: number[], sum: number, index: number): void {
        if (sum === target) {
            answer.push([...state])
            return
        }

        if (sum > target || index >= candidates.length) {
            return
        }

        state.push(candidates[index])
        backtrack(state, sum + candidates[index], index)
        state.pop()
        backtrack(state, sum, index + 1)
    }

    backtrack([], 0, 0)

    return answer
};