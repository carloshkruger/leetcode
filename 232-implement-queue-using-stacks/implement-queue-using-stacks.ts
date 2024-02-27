class MyQueue {
  private stack = []

  constructor() {
      
  }

  push(x: number): void {
    this.stack.push(x)
  }

  pop(): number {
    const auxStack = []
    while (this.stack.length) {
      auxStack.push(this.stack.pop())
    }
    const valueToReturn = auxStack.pop()
    while (auxStack.length) {
      this.stack.push(auxStack.pop())
    }
    return valueToReturn
  }

  peek(): number {
    const auxStack = []
    while (this.stack.length) {
      auxStack.push(this.stack.pop())
    }
    const valueToReturn = auxStack.at(-1)
    while (auxStack.length) {
      this.stack.push(auxStack.pop())
    }
    return valueToReturn
  }

  empty(): boolean {
    return this.stack.length === 0
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