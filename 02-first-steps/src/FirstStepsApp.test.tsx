import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
// ItemCounter: (props: unknown) => (
//   <div
//     data-testid="ItemCounter"
//     name={props.name}
//     quantity={props.quantity}
//   ></div>
// ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

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

    screen.debug();
  });

  test("Should call ItemCounter with the correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(5);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "XBOX 360",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Castlevania IV",
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "The Legend of Zelda: Ocarina of Time",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Mario 64",
      quantity: 4,
    });
  });
});
