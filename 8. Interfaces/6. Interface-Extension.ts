//Original Interface
interface myyCar {
  brand: string;
  start1?(): void;
}

//Declaration Merging
interface myyCar {
  model: string;
  stop1?(): void;
}

const myCar11: myyCar = {
  brand: "Toyota",
  model: "Camry",
  start1() {
    console.log(" started");
  },
  stop1() {
    console.log("Car stopped");
  },
};

console.log(`Brand: ${myCar11.brand}, Model: ${myCar11.model}`);

interface userrrr {
  firstName: string;
  lastName: string;
  age: number;
}

interface userrrr {
  printUserINFO(): string | number;
}

const gala: userrrr = {
  firstName: "Gala",
  lastName: "Bartay",
  age: 18,
  printUserINFO(){
    return `I'm ${this.firstName} ${this.lastName}, I'm ${this.age} years old`
  }
}

console.log(gala.printUserINFO());
