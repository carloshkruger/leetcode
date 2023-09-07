function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0
  let end = letters.length - 1

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2)
    const middleValue = letters[middleIndex]

    if (middleValue > target) {
      end = middleIndex - 1
    } else {
      start = middleIndex + 1
    }
  }

  return letters[start%letters.length]
};