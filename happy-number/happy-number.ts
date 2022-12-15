function isHappy(n: number): boolean {
    let notHappyNumbers = new Map()
    
    while (true) {
        if (notHappyNumbers.has(n)) {
            return false
        }
        const arrayNumber = n.toString().split('').map(Number)
        const squareSum = arrayNumber.reduce((a, b) => a + b * b, 0)  
        
        if (squareSum === 1) {
            return true
        }
        
        notHappyNumbers.set(n, true)
        n = squareSum
    }    
};