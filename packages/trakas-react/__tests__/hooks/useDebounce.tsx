import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { useDebounce } from "../../src";

function TestComponent() {
  const [value, setValue] = useState(1);
  const debounceValue = useDebounce(value, 5000);

  const handleClick = () => {
    setValue((value) => value + 1);
  };

  return <button onClick={handleClick}>{debounceValue}</button>;
}

describe("useDebounce", () => {
  test("not updates value within 5s", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(buttonElement).toHaveTextContent("1");
  });

  test("updates value after 5s", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(buttonElement).toHaveTextContent("2");
  });

  test("has no memory leak when a new change occurs by the delay time moment", async () => {
    render(<TestComponent />);

    const buttonElement = screen.getByRole("button");
    act(() => {
      userEvent.click(buttonElement);
      jest.advanceTimersByTime(4000);
      userEvent.click(buttonElement);
      jest.advanceTimersByTime(2000);
    });

    expect(buttonElement).toHaveTextContent("1");
  });
});
