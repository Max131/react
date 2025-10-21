import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      {/* <h1>Hello, World!</h1>
      <p>Consectetur molestiae deserunt.</p>
      <button>Click me!</button>

      <div>
        <h2>Hello, earth!</h2>
      </div> */}
      <h1>Shopping Cart</h1>
      <ItemCounter />
      <ItemCounter />
      <ItemCounter />
    </>
  );
}
