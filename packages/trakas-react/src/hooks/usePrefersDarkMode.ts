import { useMedia } from "./useMedia";

export function usePrefersDarkMode(): boolean {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
