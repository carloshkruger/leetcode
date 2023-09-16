class LRUCache {
  private hashMap = new Map<number, LinkedListNode>()
  private head: LinkedListNode | null = null
  private tail: LinkedListNode | null = null

  constructor(private capacity: number) {}

  get(key: number): number {
    if (this.hashMap.has(key)) {
      const node = this.hashMap.get(key)
      this.updateNode(node)
      return node.value
    }
    return -1
  }

  put(key: number, value: number): void {
    if (!this.hashMap.has(key)) {
      const node = new LinkedListNode(key, value)

      if (this.isFull()) {
        this.hashMap.delete(this.head?.key)
        this.removeFirstNode()
      }

      this.appendNode(node)
      this.hashMap.set(key, node)

      return
    }

    const node = this.hashMap.get(key)
    node.value = value
    this.hashMap.set(key, node)
    this.updateNode(node)
  }

  private isFull(): boolean {
    return this.capacity === this.hashMap.size
  }

  private removeFirstNode(): void {
    if (!this.head) {
      return
    }
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return
    }
    this.head = this.head.next
    this.head.prev = null
  }

  private appendNode(node: LinkedListNode): void {
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  private updateNode(node: LinkedListNode): void {
    if (this.tail === node) {
      return
    }

    if (this.head === node) {
      this.head = node.next
    } else {
      if (node.next) {
        node.next.prev = node.prev
      }
      if (node.prev) {
        node.prev.next = node.next
      }
    }

    this.appendNode(node)
  }
}

class LinkedListNode {
  constructor(
    public key: number,
    public value: number,
    public prev?: LinkedListNode,
    public next?: LinkedListNode
  ) {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */