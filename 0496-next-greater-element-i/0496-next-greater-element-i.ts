function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map()
    const answer = []
    for (let i = 0; i < nums2.length; i++) {
        let j = i + 1
        let nextValue = -1
        while (nextValue <= nums2[i] && j < nums2.length) {
            if (nums2[j] > nums2[i]) {
                nextValue = nums2[j]
            }
            j++
        }
        map.set(nums2[i], nextValue)
    }
    for (const num of nums1) {
        answer.push(map.get(num))
    }
    return answer
};