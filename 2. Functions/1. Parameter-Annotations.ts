//Regular Functions
function addOne(num: number) {
  return num + 1;
}

const result = addOne(1);
console.log(result);

//Arrow Functions
const double = (x: number, y: number) => x * y;
const res = double(2, 10)
console.log(res);