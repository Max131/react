const characterNames = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = characterNames;

console.log({ trunks });

const returnArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log({ letters, numbers });

// Task

const useState = (value: string) => {
  return [
    value,
    (value: string): void => {
      console.log(value);
    },
  ] as const;
};

const [name, setName] = useState("Lorem");
console.log(name);
setName("Ipsum");
