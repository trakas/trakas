import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useToggle } from "../../src";

type TestComponentProps = {
  initialValue?: boolean;
};

function TestComponent(props: TestComponentProps) {
  const [value, toggleValue] = useToggle(props.initialValue);
  return <button onClick={toggleValue}>{String(value)}</button>;
}

describe("useToggle", () => {
  test("have default value is false without initial value", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("false");
  });

  test("use initial value", async () => {
    render(<TestComponent initialValue={true} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("true");
  });

  test("update value after toggling", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("true");
  });

  test("revert toggle value after two times", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    userEvent.dblClick(buttonElement);

    expect(buttonElement).toHaveTextContent("false");
  });
});
