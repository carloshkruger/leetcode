function letterCombinations(digits: string): string[] {
    if (!digits.length) {
        return []
    }

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz' 
    }
    const answer = []

    function helper(currentCombination: string, digitIndex: number) {
        if (digitIndex === digits.length) {
            answer.push(currentCombination)
            return
        }

        for (let i = 0; i < map[digits[digitIndex]].length; i++) {
            helper(`${currentCombination}${map[digits[digitIndex]][i]}`, digitIndex + 1)
        }
    }

    helper('', 0)

    return answer
};