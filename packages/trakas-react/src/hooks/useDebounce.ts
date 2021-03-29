import { useEffect, useState } from "react";

export function useDebounce<T = undefined>(value: T | undefined, delay: number): T | undefined {
  const [debouncedValue, updateDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      updateDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
