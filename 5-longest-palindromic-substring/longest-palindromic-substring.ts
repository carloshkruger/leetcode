function longestPalindrome(s: string): string {
  let longest = ''

  function checkLongest(leftIndex: number, rightIndex: number): void {
    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      leftIndex--
      rightIndex++
    }

    if (rightIndex - leftIndex - 1 > longest.length) {
      longest = s.substring(leftIndex + 1, rightIndex)
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkLongest(i - 1, i + 1)
    checkLongest(i - 1, i)
  }

  return longest
};