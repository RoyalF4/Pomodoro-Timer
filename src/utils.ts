export function formatTimerNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}
