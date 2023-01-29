function isSubsequence(s: string, t: string): boolean {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        let hasFound = false
        for (; j < t.length; j++) {
            if (t[j] === s[i]) {
                hasFound = true
                break;
            }
        }
        j++
        if (!hasFound) {
            return false
        }
    }
    return true
};