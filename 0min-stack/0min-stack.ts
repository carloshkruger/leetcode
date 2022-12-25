type ListValue = {
    value: number,
    minValue: number
}

class MinStack {
    private MIN_VALUE_DEFAULT = Number.MAX_VALUE
    private list: ListValue[] = []
    private minValue = this.MIN_VALUE_DEFAULT
    
    push(val: number): void {
        this.minValue = Math.min(this.minValue, val)
        
        this.list.push({
            value: val,
            minValue: this.minValue
        })
    }

    pop(): void {
        this.list.pop()
        const listValue = this.list.at(-1)
        if (listValue !== undefined) {
            this.minValue = listValue.minValue
        } else {
            this.minValue = this.MIN_VALUE_DEFAULT
        }
    }

    top(): number {
        const { value } = this.list.at(-1)
        return value
    }

    getMin(): number {
        return this.minValue
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