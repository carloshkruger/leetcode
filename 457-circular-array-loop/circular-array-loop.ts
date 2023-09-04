function circularArrayLoop(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    let slow = i
    let fast = i
    let isMovingForward = nums[i] > 0

    while (true) {
      slow = findNextIndex(nums, isMovingForward, slow)
      fast = findNextIndex(nums, isMovingForward, fast)
      if (fast !== -1) {
        fast = findNextIndex(nums, isMovingForward, fast)
      }

      if (slow === -1 || fast === -1 || slow === fast) {
        break
      }
    }

    if (slow !== -1 && slow === fast) {
      return true
    }
  }
  
  return false
};

function findNextIndex(
  nums: number[],
  isMovingForward: boolean,
  currentIndex: number
): number {
  const direction = nums[currentIndex] > 0
  if (isMovingForward !== direction) {
    return -1
  }

  let newIndex = (currentIndex + nums[currentIndex]) % nums.length
  if (newIndex < 0) {
    newIndex += nums.length
  }
  if (newIndex === currentIndex) {
    return -1
  }

  return newIndex
}