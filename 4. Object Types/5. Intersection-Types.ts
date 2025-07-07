type Person3 = {
  fullName: string;
  age: number;
};

type Employee = {
  email: string;
  position: string;
};

type PersonAndEmployee = Person3 & Employee;

const staff: PersonAndEmployee = {
    fullName : "Toto Wolff",
    age: 53,
    email: 'totowolff@mercedes.com',
    position: 'CEO'
}

console.log(`Full Name: ${staff.fullName}, Age: ${staff.age}, Email: ${staff.email}, Position: ${staff.position} `);

// "&" sign to Intersect types