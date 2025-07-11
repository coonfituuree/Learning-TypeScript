interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const substract: MathOperation = (x, y) => x - y;
console.log(add(1, 2));
console.log(substract(1, 2));
