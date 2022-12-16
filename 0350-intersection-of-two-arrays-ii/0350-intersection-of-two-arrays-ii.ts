function intersect(nums1: number[], nums2: number[]): number[] {
    const mapNums1 = new Map()
    const mapNums2 = new Map()
    const answer = []
    
    for (const num of nums1) {
        mapNums1.set(num, (mapNums1.get(num) ?? 0) + 1)
    }
    for (const num of nums2) {
        mapNums2.set(num, (mapNums2.get(num) ?? 0) + 1)
    }
                     
    const uniqueNums = new Set(nums1.length < nums2.length ? nums1 : nums2)
    
    for (const num of uniqueNums.values()) {
        if (mapNums2.has(num)) {
            const quantity = Math.min(mapNums1.get(num), mapNums2.get(num))
            for (let i = 0; i < quantity; i++) {
                answer.push(num)
            }
        }        
    }
            
    return answer
};