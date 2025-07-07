type Person2 = {
  name: string;
  age: number;
  readonly email: string;
};

const user2: Person2 = {
  name: "Galym",
  age: 18,
  email: "test@test.com",
};

user2.name = "Kimi";
console.log(user2.name); // Valid
// user2.email = "test2@test.com"; 🚫 Not Valid
console.log(user2.email);
