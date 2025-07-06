// Regular Function
function double1(x: number): number {
  return x * x;
}

const Res = double1(3);
console.log(Res);

//Arrow Function
const doubl2 = (x: number): number => x * x;
console.log(doubl2(2));
