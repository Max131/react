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
  return (
    <section style={style}>
      <span style={{ flex: 1 }}>{name}</span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
