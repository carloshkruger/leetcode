function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    
    const numbers = []
    
    while (x > 0) {
        numbers.push(x % 10)
        x = Math.trunc(x / 10)
    }
    
    let start = 0
    let end = numbers.length - 1
    
    while (start <= end) {
        if (numbers[start] !== numbers[end]) {
            return false
        }
        start++
        end--
    }
    
    return true
};