class LinkedListNode {
  constructor(
    public key: number,
    public value: number,
    public prev?: LinkedListNode,
    public next?: LinkedListNode
  ) {}
}

class LRUCache {
  private head: LinkedListNode | null = null
  private tail: LinkedListNode | null = null
  private cacheMap = new Map<number, LinkedListNode>()

  constructor(private capacity: number) {}

  get(key: number): number {
    if (!this.cacheMap.has(key)) {
      return -1
    }

    const node = this.cacheMap.get(key)
    this.updateList(node)
    return node.value
  }

  put(key: number, value: number): void {
    if (this.cacheMap.has(key)) {
      const node = this.cacheMap.get(key)
      node.value = value

      this.cacheMap.set(key, node)
      this.updateList(node)

      return
    }

    if (this.cacheMap.size === this.capacity) {
      if (this.head) {
        this.cacheMap.delete(this.head.key)
      }
      this.removeLeastRecentlyUsed()
    }

    const node = new LinkedListNode(key, value)
    this.cacheMap.set(key, node)
    this.updateList(node)    
  }

  private removeLeastRecentlyUsed(): void {
    if (this.tail === this.head) {
      this.tail = null
      this.head = null
      return
    }

    this.head = this.head.next
    this.head.prev = null
  }

  private updateList(node: LinkedListNode): void {
    if (this.tail === node) {
      return
    }

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    if (this.head === node) {
      this.head = this.head.next
    } else {
      if (node.prev) {
        node.prev.next = node.next
      }
      if (node.next) {
        node.next.prev = node.prev
      }
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */