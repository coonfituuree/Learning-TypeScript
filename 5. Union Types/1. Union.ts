/* Syntax: let myVar: number | string */
/* Syntax for function:  unction foo(param: string | string[]){} */
let password: string | number = "something";

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email?: string;
  password?: string;
};

let userinf: UserInfo | AccountDetails = {
  first: "John",
  last: "Doe",
  age: 20,
};

const items11: (number | string)[] = [1, 2, 3, 4, "hola"];
console.log(items11);
