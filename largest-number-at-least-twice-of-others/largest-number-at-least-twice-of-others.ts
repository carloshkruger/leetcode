function dominantIndex(nums: number[]): number {
    let largest = 0
    let indexOfLargestElement = -1
    let secondLargest = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest
            largest = nums[i]
            indexOfLargestElement = i
        } else if (nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
    }
    
    if (largest >= (secondLargest * 2)) {
        return indexOfLargestElement
    }
    return -1
};