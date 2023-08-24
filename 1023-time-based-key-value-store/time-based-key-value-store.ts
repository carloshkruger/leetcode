class TimeMap {
    private data = new Map()
    private timestamps = new Map()

    constructor() {

    }

    set(key: string, value: string, timestamp: number): void {
      this.data.set(`${key}-${timestamp}`, value)

      const list = this.timestamps.get(key) ?? []
      list.push(timestamp)
      this.timestamps.set(key, list)
    }

    get(key: string, timestamp: number): string {
      if (this.data.has(`${key}-${timestamp}`)) {
        return this.data.get(`${key}-${timestamp}`)
      }

      if (!this.timestamps.has(key)) {
        return ''
      }

      const timestampList = this.timestamps.get(key)
      let correctTimestamp = null

      for (let i = 0; i < timestampList.length; i++) {
        if (timestamp > timestampList[i]) {
          correctTimestamp = timestampList[i] 
        } else {
          break
        }
      }

      if (correctTimestamp) {
        return this.data.get(`${key}-${correctTimestamp}`)
      }

      return ''
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */