//Values and Variables #1
const country = "South Africa";
const continent = "Africa";
let population = 100033737;

console.log(country);
console.log(continent);
console.log(population);

let province = "Western Cape";
let city = "Cape Town";
let thePopulation = 27373;

console.log(province);
console.log(city);
console.log(thePopulation);

// Operators, Variable assignment

/* Write your code below. Good luck! 🙂 */

//Data1

const massMark = 78,
  heightMark = 1.69,
  massJohn = 92,
  heightJohn = 1.95;

const BMIMark = massJohn / (heightMark * heightMark);
console.log(BMIMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

// Boolean statement
const BMIBoolean1 = massJohn < massMark;

console.log(BMIJohn, BMIMark, BMIBoolean1);
console.log(
  "is the mass of massJohn less than the mass of massMark? " + BMIBoolean1
);

//Data2
const massMark2 = 95,
  heightMark2 = 1.88,
  massJohn2 = 85,
  heightJohn2 = 1.76;

const BMIMark2 = massJohn2 / (heightMark2 * heightMark2);
console.log(BMIMark2);

const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIJohn2);

//Boolean statement
const BMIBoolean2 = massJohn2 < massMark2;
console.log(BMIJohn2, BMIMark2, BMIBoolean2);
console.log("is the mass of john less than the mass of mark? " + BMIBoolean2);
