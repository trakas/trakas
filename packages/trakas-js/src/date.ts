function padNumber(num: number): string {
  return num.toString().padStart(2, "0");
}

export function formatTimeInSecond(second: string | number): string {
  const time = Math.floor(Number(second));
  const hours = Math.floor(time / 60 ** 2);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60 - hours * 60 ** 2);

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}
