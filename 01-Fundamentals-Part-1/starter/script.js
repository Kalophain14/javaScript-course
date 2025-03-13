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

const thisYear = 2025;
const ageTemoso = thisYear - 1994;
const ageSlv = thisYear - 1992;

console.log(thisYear - 1994 < thisYear - 2090);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageTemoso + ageSlv) / 2;
console.log(ageTemoso, ageSlv, averageAge);
