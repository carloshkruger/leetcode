class MyHashSet {
    private list: number[] = [];
    
    constructor() {

    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.list.push(key)
        }
    }

    remove(key: number): void {
        this.list = this.list.filter(value => value !== key)
    }

    contains(key: number): boolean {
        return this.list.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */