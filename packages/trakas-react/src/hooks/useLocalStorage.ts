import { useCallback, useState } from "react";

type UseLocalStorageReturn<T> = [T | undefined, (value: T) => void, () => void];

export function useLocalStorage<T = undefined>(key: string, initialValue?: T): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
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

  const clearValue = useCallback(() => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  }, [key]);

  return [storedValue, setValue, clearValue];
}
