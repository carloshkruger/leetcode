class MinStack {
    private data: { value: number, minValue: number }[] = []

    push(val: number): void {
        let currentMinValue = this.data.length 
            ? this.data[this.data.length - 1].minValue
            : val
        currentMinValue = Math.min(currentMinValue, val)
        this.data.push({ value: val, minValue: currentMinValue })
    }

    pop(): void {
        this.data.pop()
    }

    top(): number {
        return this.data[this.data.length - 1].value
    }

    getMin(): number {
        return this.data[this.data.length - 1].minValue
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