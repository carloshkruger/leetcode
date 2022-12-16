function groupAnagrams(strs: string[]): string[][] {
    const hash = new Map()

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('')
        
        const dataFromHash = hash.get(sortedStr) || []
        dataFromHash.push(str)
        hash.set(sortedStr, dataFromHash)
    }
    
    return [...hash.values()]
};  