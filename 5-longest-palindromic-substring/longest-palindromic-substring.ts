function longestPalindrome(s: string): string {
  if (s.length < 2 || isPalindrome(s)) {
    return s
  }

  let longest = ''
  for (let i = 0; i < s.length - 1; i++) {
    let current = s[i]
    for (let j = i + 1; j < s.length; j++) {
      current += s[j]
      if (current.length > longest.length && isPalindrome(current)) {
        longest = current
      }
    }
  }

  return longest === "" ? s[0] : longest
};

function isPalindrome(s: string): boolean {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    if (s[start] !== s[end]) {
      return false
    }
    start++
    end--
  }

  return true
}