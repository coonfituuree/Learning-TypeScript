interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
}

const Person: Person1 = {
  firstName: "Galym",
  lastName: "Bartay",
  age: 18,
};

console.log(`Hello ${Person.firstName}`);

interface Computer {
  motherboard: string;
  cpu: string;
  ram: string;
  gpu?: string;
  storage: string;
  case: string;
}

const setup: Computer = {
  motherboard: "ASUS B760",
  cpu: "Intel Core I7-11600",
  ram: "HyperX 16gb (8gbx2)",
  storage: "SSD 1tb Nvme",
  case: "Some Case",
};

console.log(`Your Setup finished, here's specification: 
- Motherboard: ${setup.motherboard}
- CPU: ${setup.cpu}
- RAM: ${setup.ram}
- Storage: ${setup.storage}
- Case: ${setup.case}
- GPU: ${setup.gpu ?? "Not installed"}`);
