import { useCallback, useState } from "react";

export function useLocalStorage<T = undefined>(key: string, initialValue?: T): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const valueInString = localStorage.getItem(key);
      return valueInString ? JSON.parse(valueInString) ?? initialValue : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    },
    [key]
  );

  const clearValue = useCallback(() => localStorage.removeItem(key), [key]);

  return [storedValue, setValue, clearValue];
}
