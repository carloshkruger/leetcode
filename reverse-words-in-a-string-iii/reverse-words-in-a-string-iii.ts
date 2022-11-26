function reverseWords(s: string): string {
    let result = ''
    let currentWord = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += currentWord.reverse().join('') + ' '
            currentWord = []
        } else {
            currentWord.push(s[i])
        }
    }  
    
    result += currentWord.reverse().join('')
    
    return result
};