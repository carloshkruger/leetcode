class MyQueue {
    private s1: number[] = []
    private s2: number[] = []

    push(x: number): void {
        this.s1.push(x)
    }

    pop(): number {
        if (this.s2.length) {
            return this.s2.pop()
        }
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
        return this.s2.pop()
    }

    peek(): number {
        if (this.s2.length) {
            return this.s2[this.s2.length - 1]
        }
        return this.s1[0]
    }

    empty(): boolean {
        return this.s1.length === 0 && this.s2.length === 0
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