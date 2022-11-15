function sortArrayByParity(nums: number[]): number[] {
    let startIndex = 0
    let endIndex = nums.length - 1
    
    while (startIndex < endIndex) {
        const isEven = nums[startIndex] % 2 === 0
        const isOdd = nums[endIndex] % 2 !== 0
        
        if (!isEven && !isOdd) {
            [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]]
            startIndex++
            endIndex--
        } else {
            if (isEven) {
                startIndex++
            }
            
            if (isOdd) {
                endIndex--
            }
        }
    }
    
    return nums
};