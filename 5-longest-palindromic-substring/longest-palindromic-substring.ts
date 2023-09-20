function longestPalindrome(s: string): string {
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    let leftIndex = i-1
    let rightIndex = i+1

    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      leftIndex--
      rightIndex++
    }

    if (rightIndex - leftIndex - 1 > longest.length) {
      longest = s.substring(leftIndex+1, rightIndex)
    }

    leftIndex = i
    rightIndex = i+1

    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      leftIndex--
      rightIndex++
    }

    if (rightIndex - leftIndex - 1 > longest.length) {
      longest = s.substring(leftIndex+1, rightIndex)
    }
  }

  return longest
};