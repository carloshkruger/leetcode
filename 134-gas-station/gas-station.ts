function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0
  let currentGas = 0
  let answer = 0

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i]
    currentGas += gas[i] - cost[i]

    if (currentGas < 0) {
      currentGas = 0
      answer = i + 1
    }
  }

  if (totalGas < 0) {
    return -1
  }
  return answer
};