function lengthOfLastWord(s: string): number {
    const wordList = s.trim().split(' ')
    return wordList.at(-1).length
};