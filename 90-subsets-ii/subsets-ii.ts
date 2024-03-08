function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a,b) => a-b)

  const list = [[]]
  let listStartIndex = 0

  for (let i = 0; i < nums.length; i++) {
    let listLength = list.length
    for (let j = listStartIndex; j < listLength; j++) {
      list.push([...list[j], nums[i]])
    }
    if (nums[i] === nums[i+1]) {
      listStartIndex = listLength
    } else {
      listStartIndex = 0
    }
  }

  return list
};