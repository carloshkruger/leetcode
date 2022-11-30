function findWords(words: string[]): string[] {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjkl'
    const thirdRow = 'zxcvbnm'
    const answer = []
    
    for (let i = 0; i < words.length; i++) {
        let isIncludedInFirstRow = false
        let isIncludedInSecondtRow = false
        let isIncludedInThirdRow = false
        let isIncludedInMoreThanOneRow = false
        
        for (let j = 0; j < words[i].length; j++) {
            if (firstRow.includes(words[i][j])) {
                if (isIncludedInSecondtRow || isIncludedInThirdRow) {
                    isIncludedInMoreThanOneRow = true
                    break
                }
                isIncludedInFirstRow = true
            }
            if (secondRow.includes(words[i][j])) {
                if (isIncludedInFirstRow || isIncludedInThirdRow) {
                    isIncludedInMoreThanOneRow = true
                    break
                }
                isIncludedInSecondtRow = true
            }
            if (thirdRow.includes(words[i][j])) {
                if (isIncludedInFirstRow || isIncludedInSecondtRow) {
                    isIncludedInMoreThanOneRow = true
                    break
                }
                isIncludedInThirdRow = true
            }
        }
        
        if (!isIncludedInMoreThanOneRow) {
           answer.push(words[i]) 
        }
    }
    return answer
};