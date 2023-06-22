function groupAnagrams(strs: string[]): string[][] {
    const anagramGroups = new Map()
    for (const item of strs) {
        const orderedItem = item.split('').sort().join('')
        const anagramList = anagramGroups.get(orderedItem) || [];
        anagramList.push(item)
        anagramGroups.set(orderedItem, anagramList)
    }
    return [...anagramGroups.values()]
};