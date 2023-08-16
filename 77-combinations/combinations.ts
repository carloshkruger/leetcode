function combine(n: number, k: number): number[][] {
    const answer = []

    const backtrack = (current: number[], currentIndex: number) => {
        if (current.length === k) {
            answer.push(current)
            return
        }

        for (let i = currentIndex; i <= n; i++) {
            backtrack([...current, i], i + 1)
        }
    }

    backtrack([], 1)

    return answer
};