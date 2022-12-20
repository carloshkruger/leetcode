class RandomizedSet {
    private list: {[key: number]: boolean} = {}
    
    constructor() {

    }

    insert(val: number): boolean {
        if (this.list[val]) {
            return false
        }
        this.list[val] = true
        return true
    }

    remove(val: number): boolean {
        if (this.list[val]) {
            delete this.list[val]
            return true
        }
        return false
    }

    getRandom(): number {
        const keys = Object.keys(this.list)
        return Number(keys[Math.floor(Math.random() * keys.length)])
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */