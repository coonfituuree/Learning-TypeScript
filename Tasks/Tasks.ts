/* Create variables with explicit type annotations for the following values:

Number (for example, age).
A string (for example, a username).
Boolean value (for example, isAdmin flag) */

const username3: string = "coonfituuree";
const age3: number = 18;
const isAdmin: boolean = true;

const checkAdmin: string = isAdmin ? "Yes" : "No";
console.log(`Username: ${username3}, Age: ${age3}, Admin: ${checkAdmin} `);

/* Write a function that takes two numbers as parameters and returns their sum.
Specify explicit types for the parameters and the return value. */
function sumOfNums(x: number, y: number): number {
  return x + y;
}



/* Declare an array of strings that contains the names of cities.
Then write a function that takes this array and returns the city with the maximum length of the name. 
Typify all parameters and return values. */

const NameOfCities: string[] = ["Aktobe", "Astana", "New York"];

const maxLengthOfCity = (cities: string[]): string => {
  let longestCity = cities[0];

  for (let i = 1; i < cities.length; i++) {
    if (cities[i].length > longestCity.length) {
      longestCity = cities[i];
    }
  }
  return longestCity;
};

console.log(maxLengthOfCity(NameOfCities));
