function isPalindrome(s: string): boolean {
  s = s.toLowerCase()

  const validChars = new Set([
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '0'
  ])

  let start = 0
  let end = s.length - 1

  while (start < end) {
    if (!validChars.has(s[start])) {
      start++
    } else if (!validChars.has(s[end])) {
      end--
    } else {
      if (s[start] !== s[end]) {
        return false
      }
      start++
      end--
    }
  }

  return true
};