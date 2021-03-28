function padNumber(number: number): string {
  return number.toString().padStart(2, "0");
}

export function formatTimeInSecond(second: string | number): string {
  const time = Number(
    typeof second === "string" ? parseFloat(second).toFixed(0) : second.toFixed(0)
  );
  const hours = Math.floor(time / 60 ** 2);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60 - hours * 60 ** 2);

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}
