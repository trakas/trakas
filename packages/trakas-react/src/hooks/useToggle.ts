import type { DispatchWithoutAction } from "react";
import { useReducer } from "react";

export function useToggle(initialValue = false): [boolean, DispatchWithoutAction] {
  return useReducer((state) => !state, initialValue);
}
