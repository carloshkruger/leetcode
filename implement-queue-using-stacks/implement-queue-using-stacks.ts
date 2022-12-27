class MyQueue {
    private list: number[] = []
    
    constructor() {

    }

    push(x: number): void {
        this.list.push(x)
    }

    pop(): number {
        const auxStack: number[] = []
        while(this.list.length) {
            auxStack.push(this.list.pop())
        }
        const elementToReturn = auxStack.pop()
        while(auxStack.length) {
            this.list.push(auxStack.pop())
        }
        return elementToReturn
    }

    peek(): number {
        const auxStack: number[] = []
        while(this.list.length) {
            auxStack.push(this.list.pop())
        }
        const elementToReturn = auxStack.at(-1)
        while(auxStack.length) {
            this.list.push(auxStack.pop())
        }
        return elementToReturn
    }

    empty(): boolean {
        return this.list.length === 0
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