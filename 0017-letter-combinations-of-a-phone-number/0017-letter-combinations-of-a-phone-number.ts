function letterCombinations(digits: string): string[] {
    if (!digits.length) {
        return []
    }
    
    const dictionary = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    
    const answer = []
    const endDigitIndex = digits.length
    
    function helper(digitIndex: number, currentString: string): void {
        if (digitIndex === endDigitIndex) {
            answer.push(currentString)
            return
        }
        
        const value = Number(digits[digitIndex])

        for (let i = 0; i < dictionary[value].length; i++) {
            helper(digitIndex+1, `${currentString}${dictionary[value][i]}`)
        }
    }

    helper(0, '')
    
    return answer
};

