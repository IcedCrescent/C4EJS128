// This is a single line comment

/*
This is
a multiline
comment
*/

// Variable & Data Types

// Primitives

let name = "Trung"; // String
let age = 24; // Number
let height = 1.83; // Number
let isSingle = true; // Boolean

// Variable naming rules
// let 12abc; 
// let !abc@;
// let abc xyz;
// let var;
// Naming conventions
// camelCase variable name
let inboundVisitVesselId;
// Don't use var
// var abc = "adfs";

// Constant
const PI = 3.14;
// snake case
const CONTANT_NAME = "ABC";

console.log("Hello", name, "you are", age, "years old");
console.log(PI);

// variable can be re-assigned
name = "Kiên";
console.log("Hello", name, "you are", age, "years old");

// variables in JS are dynamic
// name = 1;
// console.log("Hello", name, "you are", age, "years old");

let nullVariable = null;
let undefinedVariable = undefined;

console.log("nullVariable:", nullVariable);
console.log("undefinedVariable", undefinedVariable);

// Mathematic operation
console.log(2022 - age);
// + - * / ** %
let result = (10 - 20) * 3;
console.log(result ** 2);
console.log(9 % 2);

let firstName = "Trung";
let lastName = "Dao";
let fullName = firstName + " " + lastName;
console.log("hello", fullName);

// String concat
let test = name + age;
console.log(test);

let str = "this is a string";
str = 'This is also a string';
str = `This is also another string`;
let greeting = "Hello " + name;
// String interpolation
greeting = `Hello ${name}, you were born in ${2022 - age}`;
console.log(greeting);

console.log(nullVariable + 2);
console.log(undefinedVariable * 3);

name = name + "🥹";
console.log(`Variable name is ${name.length} characters long, the first character is ${name[0]}`);


let num1 = 20;
num1++; // Add 1 unit
console.log(num1);
++num1; // Add 1 unit
console.log(num1);
num1 += 10; // num1 = num1 + 10;
// -= *= /= %=
console.log(num1);

// Input from user
let username = prompt("Hello visitor, what's your name?");
alert(`Welcome ${username}`);

let ageInput = prompt("How old are you?");
let userAge = parseInt(ageInput);
// parseFloat
alert(`You were born in ${2022 - userAge}, right?`);


// First time
// Create a repo
// git init
// git add .
// git commit -m "..."
// git remote add origin ...
// push push -u origin <branch-name>

// next time
// git add .
// git commit -m "..."
// git push