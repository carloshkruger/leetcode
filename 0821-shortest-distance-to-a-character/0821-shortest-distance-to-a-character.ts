function shortestToChar(s: string, c: string): number[] {
    const answer = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            answer.push(0)
        } else {
            let left = i - 1
            let right = i + 1
            
            while (s[left] !== c && s[right] !== c && (left > 0 || right < s.length)) {
                left--
                right++
            }
            
            if (s[left] === c) {
                answer.push(Math.abs(i - left))
            } else if (s[right] === c) {
                answer.push(Math.abs(i - right))
            }
        }
    }
    
    return answer
};