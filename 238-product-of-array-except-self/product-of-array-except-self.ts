function productExceptSelf(nums: number[]): number[] {
  const prefimSumLeft = []
  const prefixSumRight = []

  for (let i = 0; i < nums.length; i++) {
    prefimSumLeft.push(nums[i] * (prefimSumLeft[i-1] ?? 1))
    prefixSumRight.push(nums[nums.length - i - 1] * (prefixSumRight[i-1] ?? 1))
  }
  prefixSumRight.reverse()

  const answer = []
  for (let i = 0; i < nums.length; i++) {
    answer.push((prefimSumLeft[i-1] ?? 1) * (prefixSumRight[i+1] ?? 1))
  }

  return answer
};
