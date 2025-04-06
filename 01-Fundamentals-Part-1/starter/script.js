/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

48 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10); */

// Values and Variables
/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas"); 
console.log(23);

let firstName = "Temoso";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = 11;
let name = "Temoso"; // dont use often
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

// Data Type
// Value is either an Object or Primitve (everything else)

//13 March 2025
/* 7 Primitive Data types
1. Number = Floating point numbers (let age = 23)
2. Strings: sequence of characters (Temoso)
3. Boolean = Logical statements true or false
4. Undefined = value taken by a variable that is not yet defined (empty value)
5. null = empty value 
6. Symbol (ES2015) = value that is unique and cannot be changed 
7. Biglnt (ES2020) = larger intergers than the number type can hold */

/*true;
let JavascriptIsFun = true;
console.log(JavascriptIsFun);

// typeof datatypes
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Temoso");

// Variable change
JavascriptIsFun = "Sylvia";
console.log(JavascriptIsFun);

//undefined var
let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); bug or error;
*/

/*
// declaration of varialbles

//let mutable (can be changed)
let age = 30;
age = 31;
console.log(age);

// const immutable (cannot be changed)
const birthYear = 1994;
birthYear = 1980;
console.log(birthYear);

//var (never use var)
var job = "programnmer";
job = "front end";
console.log(job);
*/

/*Basic Operators

+ (addition)
- (subsctract)
/ (division)
* (multiply)
** (power of)
% (modula aka remiander) 

const thisYear = 2025;
const ageTemoso = thisYear - 1994;
const ageSlv = thisYear - 1992;
console.log(ageTemoso, ageSlv);
console.log(ageTemoso * 2, (ageSlv / 10) ** 2);

// string concanate
const firstName = "Temoso";
const lastName = "Chueu";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 100;
x -= 4;
x++;
x--;
console.log(x);

//Comparison operators
> (greater than)
< (less than)
>= (greater than equal to)
<= (less than equal to)

console.log(ageTemoso >= ageSlv);
console.log(ageSlv <= ageTemoso);

const isFullAge = ageTemoso >= 20;
console.log(isFullAge);
console.log(thisYear - 1994 < thisYear - 2090); */

//Operator precedence

//operator precedence = links (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

/*const thisYear = 2025;
const ageTemoso = thisYear - 1994;
const ageSlv = thisYear - 1992;

console.log(thisYear - 1994 < thisYear - 2090);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageTemoso + ageSlv) / 2;
console.log(ageTemoso, ageSlv, averageAge);

*/

/*Template and Strings Literals
const firstName = "Temoso";
const job = "software engineer";
const birthYear = 1994;
const year = 2028;

const TemosoNew = `my name is ${firstName}, a beginner ${job} who is born in ${
  year - birthYear
} and would likle to achieve his goal in the next ${year - birthYear} years`;
console.log(TemosoNew);

console.log(`Temoso Chueu`);

//old new line
console.log(`
Baby I love you \n\
multiple \n\
lines`);

// template string new
console.log(`
string
multiple
lines`);

**/

/* Taking decisions if / else statements
const age = 25;

if (age >= 30) {
  console.log(`sarah can start drive license 💦🙈`);
} else {
  const yearsLeft = 30 - age;
  console.log(
    `sarah is still young she must wait until she is ${yearsLeft} years older`
  );
}

// control structure
const birthYear = 1994;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* Type Conversion and Cohersion

// Type Conversion - Is when we manually convert from one type to another

const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear)); //returns string inputYear as a number by using type conversion (Number)

//console.log(Number("Jonas")); Nan = NotaNumber

console.log(String(23), 23);

Converts can be made to
- to a Number
- to a String
- to a Boolean(true/false);

// Type Cohersion - is when Javascript automitically converts types for us

console.log(`I am ` + 23 + ` years old`);

let n = `1` + 1; //string 11 it is concatenated + 1
n = n - 1;
console.log(n);

// Truthy and Falsy values

// 5 falsy values
// 0;
// `` = empty string
// undefined
// null
// NaN = Not a number

console.log(Boolean(0));
console.log(Boolean(`Jonas`));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(`j`));

const money = 0;

if (money) {
  console.log(`Don't spend it all 😉`);
} else {
  console.log(`You should get a job!`);
}

let height = 1.92;
if (height) {
  console.log(`YAY Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

// Equity Operators: == vs ===
// == Lose (does type cohersion)
// === Strict (doesnt perfome type Cohersion)

/*  const age = 18;
if (age === 18) {
  console.log(`You are an adult (strict)🙈`);
} // its better to use strict to compare values

if (age == `18`) {
  console.log(`You are an adult (loose) 🙈`);
}

const favourite = Number(prompt(`What is your favourite number`));

console.log(favourite);

if (favourite === 23) {
  console.log(`Cool, you are old`);
} else if (favourite === 7) {
  console.log(`you are very young`);
} else if (favourite === 9) {
  console.log(`You are a Teenager`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`You must grow up`);
*/

//Basic Boolean Logic: The AND, OR & OPERATORS
// And Operator (True when all are true)
// - True/ True = True

// Or Operator = True when One is true
// False if both are false

// ! not operator = inverts True(False) or False(True)

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

/* if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive ..`);
} */

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive ..`);
}
