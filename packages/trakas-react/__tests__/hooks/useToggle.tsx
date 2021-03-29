import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useToggle } from "../../src";

function TestComponent() {
  const [value, toggleValue] = useToggle();
  return <button onClick={toggleValue}>{String(value)}</button>;
}

describe("useToggle", () => {
  test("update value after toggling", async () => {
    render(<TestComponent />);

    const buttonElement = await screen.findByText("false");
    userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("true");
  });

  test("revert toggle value after two times", async () => {
    render(<TestComponent />);

    const buttonElement = await screen.findByText("false");
    userEvent.dblClick(buttonElement);

    expect(buttonElement).toHaveTextContent("false");
  });
});
