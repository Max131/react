import { useState, type CSSProperties } from "react";

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

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <section style={style}>
      <span style={{ flex: 1 }}>{name}</span>
      <button onClick={handleSubstract}>-1</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
};
