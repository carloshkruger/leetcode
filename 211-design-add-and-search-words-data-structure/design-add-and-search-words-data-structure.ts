class TrieNode {
  constructor(
    public children = {},
    public endOfWord = false
  ) {}
}

class WordDictionary {
  private tree = new TrieNode()

  addWord(word: string): void {
    let current = this.tree
    for (const char of word) {
      if (!(char in current.children)) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
    }
    current.endOfWord = true
  }

  search(prefix: string): boolean {
    function dfs(index: number, root: TrieNode): boolean {
      let current = root
      for (let i = index; i < prefix.length; i++) {
        const char = prefix[i]
        if (char === '.') {
          for (const keyChar in current.children) {
            if (dfs(i + 1, current.children[keyChar])) {
              return true
            }
          }
          return false
        } else if (!(char in current.children)) {
          return false
        }
        current = current.children[char]
      }
      return current.endOfWord
    }

    return dfs(0, this.tree)
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */