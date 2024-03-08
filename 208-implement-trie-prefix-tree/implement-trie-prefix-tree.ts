class TrieNode {
  constructor(
    public children = {},
    public endOfWord = false
  ) {}
}

class Trie {
  private tree = new TrieNode()

  insert(word: string): void {
    let current = this.tree
    for (const char of word) {
      if (!(char in current.children)) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
    }
    current.endOfWord = true
  }

  search(word: string): boolean {
    let current = this.tree
    for (const char of word) {
      if (!(char in current.children)) {
        return false
      }
      current = current.children[char]
    }
    return current.endOfWord
  }

  startsWith(prefix: string): boolean {
    let current = this.tree
    for (const char of prefix) {
      if (!(char in current.children)) {
        return false
      }
      current = current.children[char]
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */