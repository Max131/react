import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    // const { container } = render(<MyAwesomeApp />);
    render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = screen.getByRole("heading", {
      level: 1,
    });

    console.log(h1.innerHTML);

    // const h1 = container.querySelector("h1");
    // const h3 = container.querySelector("h3");
    //
    // expect(h1?.innerHTML).toBe("John");
    // expect(h3?.innerHTML).toContain("Doe");
  });
});
