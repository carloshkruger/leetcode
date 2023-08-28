function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s
  }

  let longest = ''

  for (let i = 0; i <= s.length - 1; i++) {
    let leftIndex = i - 1
    let rightIndex = i + 1

    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      leftIndex--
      rightIndex++
    }
    let maybeLongest = s.substring(leftIndex+1, rightIndex)
    if (maybeLongest.length > longest.length) {
      longest = maybeLongest
    }

    leftIndex = i
    rightIndex = i + 1

    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      leftIndex--
      rightIndex++
    }
    maybeLongest = s.substring(leftIndex+1, rightIndex)
    if (maybeLongest.length > longest.length) {
      longest = maybeLongest
    }
  }

  return longest
};