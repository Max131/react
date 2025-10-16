interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const superman: Person = {
  firstName: "Clark",
  lastName: "Kent",
  age: 33,
};

const spiderMan: Person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 21,
  address: {
    postalCode: "12345",
    city: "New York",
  },
};

console.log({ superman, spiderMan });
