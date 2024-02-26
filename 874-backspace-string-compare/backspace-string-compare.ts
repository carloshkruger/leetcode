function backspaceCompare(s: string, t: string): boolean {
  return formatText(s) === formatText(t)
};

function formatText(text: string): string {
  const stack = []
  for (const char of text) {
    if (char === '#') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}