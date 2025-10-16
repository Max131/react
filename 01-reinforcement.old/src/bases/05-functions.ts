function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greet2 = (name: string): string => `Hello, ${name}!`;

const message = greet("Alice");
const message2 = greet2("Bob");

console.log(message, message2);

interface User {
  id: number;
  username: string;
}

function getUser(): User {
  return {
    id: 1,
    username: "Alice",
  };
}

const getUser2 = (): User => ({
  id: 2,
  username: "Bob",
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);
