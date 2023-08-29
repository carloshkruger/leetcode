class LRUCache {
  private capacity: number
  private data = new Map<number, number>()

  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.data.has(key)) {
      const value = this.data.get(key)
      this.data.delete(key)
      this.data.set(key, value)
      return value
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.data.size === this.capacity && !this.data.has(key)) {
      const firstItemKey = this.data.keys().next().value
      this.data.delete(firstItemKey)
    }
    this.data.delete(key)
    this.data.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */