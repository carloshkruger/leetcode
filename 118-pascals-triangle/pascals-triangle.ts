function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return []
  }

  const answer = [[1]]

  if (numRows === 1) {
    return answer
  }

  let prevRow = [1]

  for (let i = 2; i <= numRows; i++) {
    const newRow = []
    for (let j = 0; j < prevRow.length; j++) {
      newRow.push((prevRow[j-1]??0) + prevRow[j])
    }
    newRow.push(1)
    answer.push(newRow)
    prevRow = newRow
  }

  return answer
};