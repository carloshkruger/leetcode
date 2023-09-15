function longestCommonPrefix(strs: string[]): string {
  let smallestWord = strs[0]
  for (const str of strs) {
    if (str.length < smallestWord.length) {
      smallestWord = str
    }
  }

  let longestCommonPrefix = ''

  for (let prefixIndex = 0; prefixIndex < smallestWord.length; prefixIndex++) {
    let currentChar = smallestWord[prefixIndex]
    let isCommon = true

    for (let i = 0; i < strs.length; i++) {
      if (strs[i][prefixIndex] !== currentChar) {
        isCommon = false
        break
      }
    }

    if (isCommon) {
      longestCommonPrefix += currentChar
    } else {
      break
    }
  }

  return longestCommonPrefix
};