class LinkedListNode {
    constructor(public val: number, public next: LinkedListNode | null = null) {}
}

class MyLinkedList {
    private head: LinkedListNode | null = null

    get(index: number): number {
        if (!this.head) {
            return -1
        }
        let previous = this.head
        let count = 0
        while (previous && count < index) {
            previous = previous.next
            count++
        }
        if (!previous) {
            return -1
        }
        return previous.val
    }

    addAtHead(val: number): void {
        if (!this.head) {
            this.head = new LinkedListNode(val)
            return
        }
        
        const node = new LinkedListNode(val, this.head)
        this.head = node
    }

    addAtTail(val: number): void {
        if (!this.head) {
            this.head = new LinkedListNode(val)
            return
        }
        
        let previous = this.head
        while (previous.next) {
            previous = previous.next
        }
        previous.next = new LinkedListNode(val)
    }

    addAtIndex(index: number, val: number): void {
        if (!this.head && index === 0) {
            this.head = new LinkedListNode(val)
            return
        }
        if (!this.head && index > 0) {
            return
        }
        if (index === 0) {
            const node = new LinkedListNode(val, this.head)
            this.head = node
            return
        }
        
        let previous = this.head
        let count = 1
        while (previous.next && count < index) {
            previous = previous.next
            count++
        }
        if (previous) {
            const temp = previous.next
            previous.next = new LinkedListNode(val, temp)
        }
    }

    deleteAtIndex(index: number): void {
        if (!this.head) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let previous = this.head
        let count = 1
        while (previous.next && count < index) {
            previous = previous.next
            count++
        }
        if (previous) {
            previous.next = previous.next?.next || null
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */