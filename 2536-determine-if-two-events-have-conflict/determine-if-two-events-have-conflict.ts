function haveConflict(event1: string[], event2: string[]): boolean {
  const [event1Start, event1End] = event1.map(timeStringToInteger)
  const [event2Start, event2End] = event2.map(timeStringToInteger)

  return (event1Start >= event2Start && event1Start <= event2End)
    || (event2Start >= event1Start && event2Start <= event1End)
};

function timeStringToInteger(time: string): number {
  return Number(time.replace(':', ''))
}