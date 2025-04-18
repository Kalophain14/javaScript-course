"use strict";

//helps avoid errors
// reserves words to be used in Java // const interface = `audio`; // const private = 543;

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
*/

// FUNCTIONS = pieces of codes that can re-used

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
