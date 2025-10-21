import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "XBOX 360", quantity: 2 },
  { productName: "Pro Controller", quantity: 1 },
  { productName: "Castlevania IV", quantity: 3 },
  { productName: "The Legend of Zelda: Ocarina of Time", quantity: 1 },
  { productName: "Super Mario 64", quantity: 4 },
];

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
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
