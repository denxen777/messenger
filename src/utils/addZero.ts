export const addZero = (num: number) => {
  if (num < 0) return;

  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}