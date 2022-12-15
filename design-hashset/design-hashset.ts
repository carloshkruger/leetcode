class MyHashSet {
    private list: {[key: number]: boolean} = {}
    
    constructor() {

    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.list[key] = true
        }
    }

    remove(key: number): void {
        delete this.list[key]
    }

    contains(key: number): boolean {
        return !!this.list[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */