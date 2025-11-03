import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test item";
    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
  });

  test("should render with custom quantity", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    const name = "Control de Nintendo";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const name = "Control de Nintendo";
    const quantity = 5;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    const name = "Control de Nintendo";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);
    fireEvent.click(buttonSubstract);

    expect(screen.getByText("0")).toBeDefined();
  });

  test("shouwld show count in red when quantity is 0", () => {
    const name = "Control de Nintendo";
    const quantity = 0;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("red");
  });

  test("shouwld show count in black when quantity is greater than 0", () => {
    const name = "Control de Nintendo";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
