function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greet2 = (name: string): string => `Hello, ${name}!`;

const message = greet("Alice");
const message2 = greet2("Bob");

console.log(message, message2);
