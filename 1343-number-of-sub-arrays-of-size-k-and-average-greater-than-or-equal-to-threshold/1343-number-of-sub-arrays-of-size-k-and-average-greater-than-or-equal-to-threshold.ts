function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let currentSum = 0
    let leftIndex = 0
    let validSubArrayCount = 0
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        
        if (i + 1 >= k) {
            if (currentSum / k >= threshold) {
                validSubArrayCount++
            }
            
            currentSum -= arr[leftIndex]
            leftIndex++
        }
    }
    
    return validSubArrayCount
};