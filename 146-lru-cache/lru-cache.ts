class LRUCache {
  private capacity: number
  private data = new Map<number, LinkedListNode>()
  private head: LinkedListNode | null = null
  private tail: LinkedListNode | null = null

  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.data.has(key)) {
      const node = this.data.get(key)
      this.updateNode(node)
      return node.data
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.data.has(key)) {
      const node = this.data.get(key)
      this.updateNode(node)
      node.data = value
      this.data.set(key, node)
    } else {
      const newNode = new LinkedListNode(value, key)

      if (this.isFull()) {
        this.data.delete(this.head.key)
        this.deleteFirstNode()
      }

      this.updateNode(newNode)
      this.data.set(key, newNode)
    }
  }

  private isFull(): boolean {
    return this.data.size === this.capacity
  }

  private deleteFirstNode(): void {
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return
    }
    this.head = this.head.next
    this.head.prev = null
  }

  private updateNode(node: LinkedListNode): void {
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }
    if (this.tail === node) {
      return
    }
    if (this.head === node) {
      this.deleteFirstNode()
      this.append(node)
      return
    }

    if (node.next) {
      node.next.prev = node.prev
    }
    if (node.prev) {
      node.prev.next = node.next
    }

    this.append(node)
  }

  private append(node: LinkedListNode): void {
    node.prev = this.tail
    this.tail.next = node
    this.tail = node    
  }
}

class LinkedListNode {
  public data: number
  public key: number
  public prev: LinkedListNode | null
  public next: LinkedListNode | null

  constructor(data: number, key: number, prev?: LinkedListNode, next?: LinkedListNode) {
    this.data = data
    this.key = key
    this.prev = prev ?? null
    this.next = next ?? null
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */