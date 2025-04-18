"use strict";

//helps avoid errors
// reserves words to be used in Java // const interface = `audio`; // const private = 543;

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
*/

/* FUNCTIONS = pieces/chunks of codes that can re-used

function logger() {
  console.log(`my name is Temoso`);
}

// invoking / running / calling the function
logger(78);
logger();
logger();

function foodLoversProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = foodLoversProcessor(5, 0);
console.log(foodLoversProcessor(5, 0));

const appleOrangeJuice = foodLoversProcessor(10, 20);
console.log(appleOrangeJuice);
*/

// FUNCTIONS DECLARATION VS EXPRESSIONS

// function declarion
function calcAge1(birthYear) {
  return 2030 - birthYear;
}
const age1 = calcAge1(1994);

//function and expression(variable)
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calcAge2(1994);
console.log(age1, age2);

// Arrow => functions
const calcAge3 = (birthYear) => 2030 - birthYear;
const age3 = calcAge3(1994); // call the function
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, `Temoso`));
console.log(yearsUntilRetirement(1992, `Sylvia`));

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function foodLoversProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(foodLoversProcessor(2, 3));
