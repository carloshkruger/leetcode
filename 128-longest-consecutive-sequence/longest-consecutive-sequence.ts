function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)

  let biggestSequence = 0

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let length = 0
      while (set.has(num + length)) {
        length++
      }
      biggestSequence = Math.max(biggestSequence, length)
    }
  }

  return biggestSequence
};
