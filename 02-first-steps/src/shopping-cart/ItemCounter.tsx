import type { CSSProperties } from "react";

const style: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBlock: 8,
};

export const ItemCounter = () => {
  return (
    <section style={style}>
      <span style={{ width: 100 }}>XBOX 360</span>
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  );
};
