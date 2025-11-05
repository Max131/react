import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";

describe("FirstStepsApp", () => {
  test("Should be snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();

    screen.debug();
  });

  test("Should render Shopping Cart title", () => { });
  render(<FirstStepsApp />);

  expect(FirstStepsApp).toBeDefined();
});
