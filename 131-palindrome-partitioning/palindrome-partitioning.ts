function partition(s: string): string[][] {
  const answer = []
  const partitions = []

  function dfs(index: number): void {
    if (index >= s.length) {
      answer.push([...partitions])
      return
    }
    for (let j = index; j < s.length; j++) {
      const substr = s.substring(index, j+1)
      if (isPalindrome(substr)) {
        partitions.push(substr)
        dfs(j+1)
        partitions.pop()
      }
    }
  }

  dfs(0)

  return answer
};

function isPalindrome(str: string): boolean {
  let start = 0
  let end = str.length - 1

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }

  return true
}