function findWords(words: string[]): string[] {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjkl'
    const thirdRow = 'zxcvbnm'
    const answer = []
    
    for (let i = 0; i < words.length; i++) {
        let firstRowCount = 0
        let secondRowCount = 0
        let thirdRowCount = 0
        
        for (let j = 0; j < words[i].length; j++) {
            const currentLetter = words[i][j].toLowerCase()
            if (firstRow.includes(currentLetter)) {
                firstRowCount++
            } else if (secondRow.includes(currentLetter)) {
                secondRowCount++
            } else if (thirdRow.includes(currentLetter)) {
                thirdRowCount++
            }
        }
        
        if (firstRowCount === words[i].length || secondRowCount === words[i].length || thirdRowCount === words[i].length) {
           answer.push(words[i]) 
        }
    }
    return answer
};