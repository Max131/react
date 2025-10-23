import { test, expect } from "vitest";
import { add } from "./math.helper";

test("Should add two positive numbers", () => {
  // 1. Arrange
  const a = 1;
  const b = 2;

  // 2. Act
  const result = add(a, b);

  // 3. Assert
  expect(result).toBe(3);
});
