class MyCircularQueue {
    private queue: number[] = []
    private headIndex = 0
    private tailIndex = 0
    private maxSize = 0
    private size = 0
    
    constructor(k: number) {
        this.maxSize = k
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.queue[this.tailIndex++] = value
        this.size++
        
        if (this.tailIndex === this.maxSize) {
            this.tailIndex = 0
        }
        
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.headIndex++
        this.size--
        
        if (this.headIndex === this.maxSize) {
            this.headIndex = 0
        }

        return true
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.queue[this.headIndex]
    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.queue[this.tailIndex === 0 ? this.maxSize - 1 : this.tailIndex - 1]
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.maxSize
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */