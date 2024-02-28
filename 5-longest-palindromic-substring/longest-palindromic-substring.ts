function longestPalindrome(s: string): string {
  let longest = ''

  function checkLongestPalindrome(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }

    if (right - left - 1 >= longest.length) {
      longest = s.substring(left + 1, right)
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkLongestPalindrome(i - 1, i + 1)
    checkLongestPalindrome(i, i + 1)
  }

  return longest
};