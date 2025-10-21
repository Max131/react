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
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <p> {figures.join(", ")} </p>
      <p> {5 + 6} </p>
      <h1>{isActive ? "Active" : "Inactive"}</h1>
      <p>{JSON.stringify(address, null, 2)}</p>
    </>
  );
}
