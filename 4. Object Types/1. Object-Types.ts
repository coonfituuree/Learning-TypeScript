const profile: {
  login: string;
  password: any;
  firstName: string;
  lastName: string;
} = {
  login: "gala@gala.com",
  password: "someshi",
  firstName: "Galym",
  lastName: "Bartay",
};

console.log(
  `Login: ${profile.login}, Full Name: ${profile.firstName} ${profile.lastName} `
);

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Galym",
    age: 18,
    location: "Kazakhstan",
  };
}

const res1 = printUser()
console.log(res1);


