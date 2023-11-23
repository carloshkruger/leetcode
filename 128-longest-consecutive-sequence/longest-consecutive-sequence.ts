function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0
  }
  const numsCopy = [...new Set(nums)].sort((a,b) => a-b)

  let longest = 1
  let currentLength = 1
  for (let i = 1; i < numsCopy.length; i++) {
    if (numsCopy[i] === (numsCopy[i-1] + 1)) {
      currentLength++
      longest = Math.max(longest, currentLength)
    } else {
      currentLength = 1
    }
  }
  
  return longest
};

