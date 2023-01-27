function minOperations(logs: string[]): number {
    let answer = 0
    for (const log of logs) {
        if (log === './') {
            continue
        }
        if (log === '../') {
            if (answer > 0) {
                answer--
            }
        } else {
            answer++
        }
    }
    return answer
};