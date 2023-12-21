function findKthPositive(arr: number[], k: number): number {
    let i = 0
    while (i < arr.length) {
        const j = arr[i] - 1
        if (arr[i] !== arr[j] && arr[i] <= arr.length) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        } else {
            i++
        }
    }

    const missingNumbers = []
    const existsNumbers = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            missingNumbers.push(i + 1)
            existsNumbers.add(arr[i])
        }
    }

    let index = arr.length + 1
    while (missingNumbers.length < k) {
        if (!existsNumbers.has(index)) {
            missingNumbers.push(index)
        }
        index++
    }

    return missingNumbers[k - 1]
};