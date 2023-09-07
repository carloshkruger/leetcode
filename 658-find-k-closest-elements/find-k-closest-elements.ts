function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (x <= arr[0]) {
    return arr.slice(0, k)
  }
  if (x >= arr[arr.length-1]) {
    return arr.slice(arr.length-k)
  }

  let left = 0
  let right = 0

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === x || arr[i+1] > x) {
      left = i
      right = i + 1
      break
    }
  }

  const answer = []
  while (answer.length < k) {
    const leftDiff = arr[left] !== undefined ? Math.abs(arr[left]-x) : Infinity
    const rightDiff = arr[right] !== undefined ? Math.abs(arr[right]-x) : Infinity
    if (leftDiff <= rightDiff) {
      answer.push(arr[left])
      left--
    } else {
      answer.push(arr[right])
      right++
    }
  }

  answer.sort((a,b)=>a-b)

  return answer
};