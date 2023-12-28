function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map()

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('')
        const group = anagrams.get(sortedStr) ?? []
        group.push(str)
        anagrams.set(sortedStr, group)
    }

    return [...anagrams.values()]
};