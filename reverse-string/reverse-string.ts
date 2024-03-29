/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let leftIndex = 0
    let rightIndex = s.length - 1
    
    while (leftIndex < rightIndex) {
        [s[rightIndex], s[leftIndex]] = [s[leftIndex], s[rightIndex]]
        leftIndex++
        rightIndex--
    }
};