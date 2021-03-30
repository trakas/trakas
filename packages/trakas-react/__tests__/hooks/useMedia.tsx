import { render, screen } from "@testing-library/react";
import { useMedia } from "../../src/hooks/useMedia";
import { mockMatchMedia } from "../../utils/mocks";

function TestComponent() {
  const minColumn = useMedia(["(min-width: 10px)", "(min-width: 0px)"], [1, 2], 0);
  const maxColumn = useMedia(["(max-width: 10px)", "(max-width: 200px)"], [1, 4], 0);

  return (
    <>
      <button aria-label="minColumn">{minColumn}</button>
      <button aria-label="maxColumn">{maxColumn}</button>
    </>
  );
}

describe("useMedia", () => {
  test("return value when matched", async () => {
    mockMatchMedia((query) => ["(min-width: 0px)", "(max-width: 10px)"].includes(query));
    render(<TestComponent />);

    const minButtonElement = screen.getByRole("button", { name: "minColumn" });
    const maxButtonElement = screen.getByRole("button", { name: "maxColumn" });

    expect(minButtonElement).toHaveTextContent("2");
    expect(maxButtonElement).toHaveTextContent("1");
  });

  test("return default values when no matches", async () => {
    render(<TestComponent />);

    const minButtonElement = screen.getByRole("button", { name: "minColumn" });
    const maxButtonElement = screen.getByRole("button", { name: "maxColumn" });

    expect(minButtonElement).toHaveTextContent("0");
    expect(maxButtonElement).toHaveTextContent("0");
  });

  afterEach(() => {
    mockMatchMedia(() => false);
  });
});
