/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let begin = 0;
    let end = s.length - 1
    
    while (begin < end) {
        const temp = s[end]
        s[end] = s[begin]
        s[begin] = temp
        
        begin++
        end--
    }
};