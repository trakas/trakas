import { render, screen } from "@testing-library/react";
import { usePrefersDarkMode } from "../../src/hooks/usePrefersDarkMode";
import { mockMatchMedia } from "../../utils/mocks";

function TestComponent() {
  const darkMode = usePrefersDarkMode();
  return <button aria-label="darkMode">{JSON.stringify(darkMode)}</button>;
}

describe("usePrefersDarkMode", () => {
  test("return true when the system is preferred dark mode", async () => {
    mockMatchMedia((query) => query === "(prefers-color-scheme: dark)");
    render(<TestComponent />);

    const darkModeButtonElement = screen.getByRole("button", { name: "darkMode" });
    expect(darkModeButtonElement).toHaveTextContent("true");
  });

  test("return false when the system is preferred light mode", async () => {
    mockMatchMedia((query) => query === "(prefers-color-scheme: light)");
    render(<TestComponent />);

    const darkModeButtonElement = screen.getByRole("button", { name: "darkMode" });
    expect(darkModeButtonElement).toHaveTextContent("false");
  });

  afterEach(() => {
    mockMatchMedia(() => false);
  });
});
