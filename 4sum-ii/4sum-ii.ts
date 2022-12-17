function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map()
    let answer = 0

    for (const num1 of nums1) {
        for (const num2 of nums2) {
            map.set(num1+num2, (map.get(num1+num2) ?? 0) + 1)
        }
    }
        
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            if (map.has(-num3-num4)) {
                answer += map.get(-num3-num4)
            }
        }
    }

    return answer
};