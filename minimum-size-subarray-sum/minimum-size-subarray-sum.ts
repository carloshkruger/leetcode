function minSubArrayLen(target: number, nums: number[]): number {
    let minimalLength = Number.MAX_VALUE;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]
        
        while (windowSum >= target) {
            minimalLength = Math.min(minimalLength, windowEnd - windowStart + 1)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    
    return minimalLength === Number.MAX_VALUE ? 0 : minimalLength
};