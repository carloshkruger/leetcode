function carPooling(trips: number[][], capacity: number): boolean {
  trips.sort((a, b) => a[1] - b[1])

  if (trips.length === 1) {
    return trips[0][0] <= capacity
  }

  let currentTrip = []
  let j = 0

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

[[9,1,7],[4,2,4],[9,3,4],[7,4,5]]
22