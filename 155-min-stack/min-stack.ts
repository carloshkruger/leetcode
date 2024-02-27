class MinStack {
  private stack: {val: number, minVal: number}[] = []

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push({ val, minVal: val })
    } else {
      const minVal = Math.min(val, this.stack.at(-1).minVal)
      this.stack.push({ val, minVal })
    } 
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack.at(-1).val
  }

  getMin(): number {
    return this.stack.at(-1).minVal
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */