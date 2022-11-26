function reverseWords(s: string): string {
    return s.trim().split(' ').filter(text => text !== '').reverse().join(' ')
};