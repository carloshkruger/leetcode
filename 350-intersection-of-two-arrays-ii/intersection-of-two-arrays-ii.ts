function intersect(nums1: number[], nums2: number[]): number[] {
  const mapNums1 = new Map()
  const answer = []
  
  for (const num of nums1) {
    mapNums1.set(num, (mapNums1.get(num) ?? 0) + 1)
  }
  for (const num of nums2) {
    if (mapNums1.has(num)) {
      answer.push(num)
      const count = mapNums1.get(num)
      if (count === 1) {
        mapNums1.delete(num)
      } else {
        mapNums1.set(num, count - 1)
      }
    }
  }

  return answer
};