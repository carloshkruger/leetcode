function subsetsWithDup(nums: number[]): number[][] {
  const subsets = [[]]
  let endSubsetIndex = 0

  nums.sort((a,b) => a-b)

  for (let i = 0; i < nums.length; i++) {
    let startSubsetIndex = 0
    if (i > 0 && nums[i] === nums[i-1]) {
      startSubsetIndex = endSubsetIndex+1
    }
    endSubsetIndex = subsets.length-1
    for (let j = startSubsetIndex; j <= endSubsetIndex; j++) {
      subsets.push([...subsets[j], nums[i]])
    }
  }

  return subsets
};