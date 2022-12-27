class MyQueue {
    private stack: number[] = []
    private auxStack: number[] = []
    
    constructor() {

    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        if (this.auxStack.length) {
            return this.auxStack.pop()
        }
        
        while(this.stack.length) {
            this.auxStack.push(this.stack.pop())
        }

        return this.auxStack.pop()
    }

    peek(): number {
        if (this.auxStack.length) {
            return this.auxStack.at(-1)
        }

        while(this.stack.length) {
            this.auxStack.push(this.stack.pop())
        }

        return this.auxStack.at(-1)
    }

    empty(): boolean {
        return this.stack.length === 0 && this.auxStack.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */