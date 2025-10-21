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
      <ItemCounter name="XBOX 360" quantity={2} />
      <ItemCounter name="Pro Controller" quantity={1} />
      <ItemCounter name="Castlevania IV" quantity={3} />
    </>
  );
}
