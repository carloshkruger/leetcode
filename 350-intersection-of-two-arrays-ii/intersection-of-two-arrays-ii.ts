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
                    
  let smallest = mapNums1.size < mapNums2.size ? mapNums1 : mapNums2
  let biggest = mapNums1.size < mapNums2.size ? mapNums2 : mapNums1

  for (const [num, count] of smallest.entries()) {
    if (biggest.has(num)) {
      const quantity = Math.min(count, biggest.get(num))
      for (let i = 0; i < quantity; i++) {
        answer.push(num)
      }
    }
  }
          
  return answer
};