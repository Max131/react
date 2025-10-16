const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { name: ironmanName, age, key } = person;

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

console.log({ ironmanName, age, key });

const useContext = ({ key, name, age, rank = "Without range" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  rank,
  keyName,
  user: { name },
} = useContext(person);

console.log({ rank, keyName, name });
