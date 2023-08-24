class TimeMap {
    private data = new Map()
    private timestamps = new Map()

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
      let start = 0
      let end = timestampList.length - 1

      while (start <= end) {
        const middleIndex = Math.floor((start + end) / 2)
        const middleValue = timestampList[middleIndex]

        if (middleValue > timestamp) {
          end = middleIndex - 1
        } else {
          start = middleIndex + 1
        }
      }

      if (timestampList[end] < timestamp) {
        correctTimestamp = timestampList[end]
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