import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: () => <div data-testid="ItemCounter"></div>,
}));

describe("FirstStepsApp", () => {
  test("Should render Shopping Cart", () => {
    render(<FirstStepsApp />);
    expect(FirstStepsApp).toBeDefined();
  });

  test("Should be snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(5);
  });
});
