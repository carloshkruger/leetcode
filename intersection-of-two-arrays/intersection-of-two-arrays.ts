function intersection(nums1: number[], nums2: number[]): number[] {
    const result = new Set<number>()
    const aux = new Set(nums2)
    for (const num of nums1) {
        if (aux.has(num)) {
            result.add(num)    
        }
    }
    return [...result.values()]
};