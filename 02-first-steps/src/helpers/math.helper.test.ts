import { describe, test, expect } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("Should add two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. Act
    const result = add(a, b);

    // 3. Assert
    expect(result).toBe(3);
  });

  test("Should add two negative numbers", () => {
    const a = -1;
    const b = -2;

    const result = add(a, b);

    expect(result).toBe(-3);
  });

  test("Should substract two positive numbers", () => {
    const a = 5;
    const b = 2;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });

  test("Should substract two negative numbers", () => {
    const a = -5;
    const b = -2;

    const result = substract(a, b);

    expect(result).toBe(-3);
  });

  test("Should multiply two positive numbers", () => {
    const a = 2;
    const b = 3;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
