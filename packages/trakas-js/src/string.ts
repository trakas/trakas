const comparator = new Intl.Collator();

export function compareString(a: string, b: string): number {
  return comparator.compare(a, b);
}
