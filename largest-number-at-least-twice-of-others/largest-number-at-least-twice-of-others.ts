function dominantIndex(nums: number[]): number {
    const numsTwice = nums.map(num => num + num)

    for (let i = 0; i < nums.length; i++) {
        let isBigger = true 
        for (let j = 0; j < numsTwice.length; j++) {
            if (j === i) {
                continue
            }
            
            if (numsTwice[j] > nums[i]) {
                isBigger = false
                break
            }
        }
        if (isBigger) {
            return i
        }
    }
    
    return -1
};