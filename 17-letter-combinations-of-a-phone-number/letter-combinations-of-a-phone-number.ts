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

    const combinations = []

    const generateCombinations = (index: number, current: string) => {
        if (current.length === digits.length) {
            combinations.push(current)
            return
        }

        const letters = map[digits[index]]
        for (const char of letters) {
            generateCombinations(index + 1, current + char)
        }
    }

    generateCombinations(0, '')

    return combinations
};