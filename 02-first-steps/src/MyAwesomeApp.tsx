import type { CSSProperties } from "react";

const name = "John";
const lastName = "Doe";

const figures = ["square", "circle", "triangle", "rectangle"];
const isActive = true;

const address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
};

export function MyAwesomeApp() {
  const myStyles: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem",
    borderRadius: isActive ? "0.5rem" : "0px",
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p> {figures.join(", ")} </p>
      <p> {5 + 6} </p>
      <h1>{isActive ? "Active" : "Inactive"}</h1>
      <p style={myStyles}>{JSON.stringify(address, null, 2)}</p>
    </>
  );
}
