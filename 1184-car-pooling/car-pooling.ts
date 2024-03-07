function carPooling(trips: number[][], capacity: number): boolean {
  trips.sort((a, b) => a[1] - b[1])

  if (trips.length === 1) {
    return trips[0][0] <= capacity
  }

  let currentTrip = []

  for (let i = 0; i < trips.length; i++) {
    currentTrip = currentTrip.filter(item => item[2] > trips[i][1])
    currentTrip.push(trips[i])

    let currentPassengersCount = 0
    for (const [passengers] of currentTrip) {
      currentPassengersCount += passengers
    }
    if (currentPassengersCount > capacity) {
      return false
    }
  }

  return true
};