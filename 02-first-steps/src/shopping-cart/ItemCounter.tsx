import type { CSSProperties } from "react";

interface Props {
  name: string;
  quantity?: number;
}

const style: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBlock: 8,
  width: "min(100%, 400px)",
};

export const ItemCounter = ({ name, quantity = 0 }: Props) => {
  const handeClick = () => {
    console.log(`Clicked ${name}`);
  };

  return (
    <section style={style}>
      <span style={{ flex: 1 }}>{name}</span>
      <button onClick={handeClick}>-1</button>
      <span>{quantity}</span>
      <button>+1</button>
    </section>
  );
};
