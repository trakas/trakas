import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocalStorage } from "../../src/hooks/useLocalStorage";

type TestComponentProps<T> = {
  initialValue?: T;
  value: T;
};

function TestComponent<T>(props: TestComponentProps<T>) {
  const [storeValue, setValue, clearValue] = useLocalStorage("item", props.initialValue);

  const handleChangeValue = () => {
    setValue(props.value);
  };

  return (
    <>
      <button aria-label="set" onClick={handleChangeValue}>
        {JSON.stringify(storeValue)}
      </button>
      <button aria-label="clear" onClick={clearValue} />
    </>
  );
}

describe("useLocalStorage", () => {
  test("set initial value for nonexistent item in Local Storage", async () => {
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("1");
  });

  test("return undefined for nonexistent item with no initial value", async () => {
    render(<TestComponent value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("");
  });

  test("set value after initializing", async () => {
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("2");
    expect(localStorage.getItem("item")).toBe("2");
  });

  test("load the value which is already stored in Local Storage", async () => {
    localStorage.setItem("item", String(3));
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("3");
  });

  test("clear the value which is already stored in Local Storage", async () => {
    localStorage.setItem("item", String(3));
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "clear" });
    userEvent.click(buttonElement);

    expect(localStorage.getItem("item")).toBeNull();
  });

  test("load the initial value when stored value is error", async () => {
    localStorage.setItem("item", `{"a":1`);
    render(<TestComponent initialValue={{ b: 2 }} value={{ c: 3 }} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent(`{"b":2}`);
  });

  test("load the initial value when stored value is incompatible value", async () => {
    localStorage.setItem("item", "NaN");
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("1");
  });

  test("load the initial value when stored value is null", async () => {
    localStorage.setItem("item", "null");
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("1");
  });

  test("load the initial value when stored value is undefined", async () => {
    localStorage.setItem("item", "undefined");
    render(<TestComponent initialValue={1} value={2} />);

    const buttonElement = screen.getByRole("button", { name: "set" });
    expect(buttonElement).toHaveTextContent("1");
  });
});
