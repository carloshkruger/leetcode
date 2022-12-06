function uniqueMorseRepresentations(words: string[]): number {
    const map = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    }
    const answer = new Set()
    
    for (const word of words) {
        let currentTransformation = ''
        for (const letter of word) {
            currentTransformation += map[letter]
        }
        answer.add(currentTransformation)
    }
    
    return answer.size
};