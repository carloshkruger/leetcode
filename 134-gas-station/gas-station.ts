function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalBalance = 0
  let startIndex = 0
  let currentBalance = 0

  for (let i = 0; i < gas.length; i++) {
    totalBalance += gas[i] - cost[i]
    currentBalance += gas[i] - cost[i]

    if (currentBalance < 0) {
      startIndex = i + 1
      currentBalance = 0
    }
  }

  if (totalBalance < 0) {
    return -1
  }
  return startIndex
};
