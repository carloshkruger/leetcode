class MyStack {
    private queue: number[] = []
    
    constructor() {

    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        const auxQueue: number[] = [] 
        while (this.queue.length) {
            auxQueue.push(this.queue.shift())
        }
    
        const poppedElement = auxQueue.pop()
        this.queue = auxQueue
        return poppedElement
    }

    top(): number {
        const auxQueue: number[] = [] 
        while (this.queue.length) {
            auxQueue.push(this.queue.shift())
        }
    
        this.queue = auxQueue
        return this.queue.at(-1)        
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */