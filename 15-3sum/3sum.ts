function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const answer = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i-1] === nums[i]) {
      continue
    }

    let leftIndex = i + 1
    let rightIndex = nums.length - 1

    while (leftIndex < rightIndex) {
      const currentSum = nums[i] + nums[leftIndex] + nums[rightIndex]
      if (currentSum === 0) {
        answer.push([nums[i], nums[leftIndex], nums[rightIndex]])

        while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex+1]) {
          leftIndex++
        }
        while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex-1]) {
          rightIndex--
        }

        leftIndex++
        rightIndex--
      } else if (currentSum < 0) {
        leftIndex++
      } else {
        rightIndex--
      }
    }
  }

  return answer
};