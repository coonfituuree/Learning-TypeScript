let color1: "red" | "blue" | "green";
color1 = "red";
//color1 = "yellow"; 🚫 Not Valid
console.log(color1);

let someNum: 1 | 2 | 3 = 2;
// someNum = 4; 🚫 Not Valid
console.log(someNum);

let isTrue: true | false;
isTrue = true;
console.log(isTrue);

let sm: 12 | "@e" = "@e";
console.log(sm);
